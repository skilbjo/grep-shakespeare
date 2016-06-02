import json

sources = [ 'Apartment Guide' , 'Apartments.com' , 'Rent.com' , 'For Rent' , 'Craigslist.com', 'Rentlix.com', 'Resident Referral', 'Drive By', None, 'Facebook', 'Housing Authority', 'Website' , 'Transfer Unit' , 'Phonebook' , 'zillow.com', 'rentdigs.com', 'online-apartments-listings.co']

json_file = './guest_cards.json'
data = []

def extract_data(file):
	with open(file,'r') as f:
		return json.load(f)

def filter_by_quarter(quarter_end,json):
	year = quarter_end[:6]
	month = quarter_end[6:7]
	quarter_start = year+str(int(month)-2)+'-01'

	result = []
	for record in json:
		if quarter_start <= record['first_seen'] <= quarter_end:
			result.append(record)
	return result

def aggregation(json):
	analytics = {}
	for index,source in enumerate(sources):
		analytics[source] = {
			'total_leads': 0,
			'signed_leases': 0,
			'total_cost': 0
		} 

	for record in json:
		if record['marketing_source'] != None:
			analytics[record['marketing_source']]['total_leads'] += 1
		if record['lease_signed'] != None:
			analytics[record['marketing_source']]['signed_leases'] += 1				

	return analytics

def costs(aggregate_data):
	for source,val in aggregate_data.items():
		val['total_cost'] = calc_costs(source,val['signed_leases'],val['total_leads'])
		val['avg_cost_per_lead'] = (val['total_cost'] / val['total_leads']) if val['total_leads'] != 0 else 0

	return aggregate_data

def calc_costs(source,signed_leases,total_leads):
	return {
		'Apartment Guide': 495,
		'Apartments.com': 295 * signed_leases,
		'Rent.com': 595,
		'Resident Referral': 500 * signed_leases,
		'For Rent': 195 + (25 * total_leads)
	}.get(source, 0)

def best_n_sources(aggregate_data,n,attr):
	if attr not in ['total_leads','signed_leases']:
		return 'Error: Usage is either "total_leads" or "signed_leases".'
	best_data = {}
	top_sources = sorted(aggregate_data, key = lambda source: aggregate_data[source][attr], reverse=True)[:n]

	for source in top_sources:
		best_data[source] = aggregate_data[source]
	return best_data

def format_print(quarter_end,data):
	print('Quarter End: ' + quarter_end)

	for index,source in enumerate(data):
		print('{0}. {1} - total leads: {2}, total cost: ${3}, avg cost per lead: ${4}'.format(index+1,source,data[source]['total_leads'],data[source]['total_cost'],data[source]['avg_cost_per_lead']))


if __name__ == '__main__':
	quarter_end = '2014-03-31'
	data = extract_data(json_file)
	filtered = filter_by_quarter(quarter_end,data)
	aggregate = aggregation(filtered)
	with_costs = costs(aggregate)
	best_sources = best_n_sources(with_costs,5,'total_leads')

	format_print(quarter_end,best_sources)