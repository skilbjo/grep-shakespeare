-- 1a. How many interview requests were placed in 2015
------------------------------
		declare @year as int = 2015

		select 
			count(*) as InterviewRequests
		from
			interview_requests ir
		where
			year(created_at) in (2015); -- t-sql feature


-- 1b. What were the highest and lowest salaries offered?
------------------------------
		declare @year as int = 2015

		select
			min(salary) as MinimumSalary, max(salary) as MaximumSalary
		from
			interview_requests ir
		where 
			year(created_at) in (@year); 

-- 1c. How does the avg salary change month over month?
------------------------------
		-- t-sql crosstab
		declare @query as nvarchar(max), @months as nvarchar(max), @year as int = 2015

		set @months =  stuff((select ',' + quotename(Month) from (
			select  
				cast(dateadd(d, -1 , dateadd(mm, (year(created_at) - 1900) * 12 + month(created_at), 0)) as date) as Month  
			from	
				interview_requests ir 
			where 
				year(created_at) in (@year) 
		) sub order by Month for xml path(''), type).value('.', 'nvarchar(max)'),1,1,'')

		set @query = '
		select * from (
			select
				cast(dateadd(d, -1 , dateadd(mm, (year(created_at) - 1900) * 12 + month(created_at), 0)) as date) as Month, -- turns Date into an eomonth() feature, allows 2016-04-03 and 2016-04-07 to be in the same ''2016-04-30'' grouping
				sum(salary)/count(*) AvgSalary
			from
				interview_requests ir
			where
				year(created_at) in ('''+cast(@year as varchar)+''')
			group by
				cast(dateadd(d, -1 , dateadd(mm, (year(created_at) - 1900) * 12 + month(created_at), 0)) as date)
		) src
		pivot(
			sum(AvgSalary)
			for [Month] in ('+@months+')
		) as pt'

		eval(@query)
		;

-- 2. Which market had the most candidates in 2015? & Approved candidates?
------------------------------
		declare @year as int = 2015

		select *, 
			rank() partition by (order by '#of_Submitted') as Submitted_Rank,
			rank() partition by (order by '#of_Approved') as Approved_Rank,
	 	from (
			select
				market_name Market, count(*) as '#of_Submitted', sum(case when approved in ('true') then 1 else 0 end) as '#of_Approved'
			from
				candidates p
			where
				year(created_at) in (@year)
			group by
				p.market_name
		) src
		order by Approved_Rank desc

-- 3. Rank the markets by average salary for the interview requests placed in 2015
------------------------------
		declare @months as nvarchar(max), @year as int = 2015

		select *, rank() partition by (order by AvgSalary) as Rank from (
			select
				p.market_name Market,
				sum(salary)/count(*) AvgSalary
			from
				interview_requests ir
				join candidates p on p.id = ir.candidate_id  -- alias candidates p for people / alias c could get confused with companies table
			where
				year(ir.created_at) in (@year)
			group by
				p.market_name
		) src
		order by Rank desc


-- 4. We want a monthly trend of interview requests per company by market for 2015.
------------------------------

		declare @query as nvarchar(max), @months as nvarchar(max), @year as int = 2015

		set @months =  stuff((select ',' + quotename(Month) from (
			select  
				cast(dateadd(d, -1 , dateadd(mm, (year(Date) - 1900) * 12 + month(Date), 0)) as date) as Month  
			from	
				interview_requests ir 
			where 
				year(Date) in (@year) 
		) sub order by Month for xml path(''), type).value('.', 'nvarchar(max)'),1,1,'')

		set @query = '
		select * from (
			select
				p.market_name Market,
				cast(dateadd(d, -1 , dateadd(mm, (year(ir.created_at) - 1900) * 12 + month(ir.created_at), 0)) as date) as Month, 
				count(*) Requests
			from
				interview_requests ir
				join candidates p on p.id = ir.candidate_id  -- alias candidates p for people / alias c could get confused with companies table
			where
				year(ir.created_at) in ('''+cast(@year as varchar)+''')
			group by
				p.market_name,
				cast(dateadd(d, -1 , dateadd(mm, (year(ir.created_at) - 1900) * 12 + month(ir.created_at), 0)) as date)
		) src
		pivot(
			sum(Requests)
			for [Month] in ('+@months+')
		) as pt'

		eval(@query)
		;








