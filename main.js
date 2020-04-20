
var data = ["Amsterdam",
    "London",
    "Paris",
    "Washington",
    "New York",
    "New Jersey",
    "New Orleans",
    "Los Angeles",
    "Sydney",
    "Melbourne",
    "Canberra",
    "Beijing",
    "New Delhi",
    "Kathmandu",
    "Cairo",
    "Cape Town",
    "Kinshasa"];
var citynames = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: $.map(data, function (city) {
        return {
            name: city
        };
    })
});
citynames.initialize();
$('#search').tagsinput({
	typeaheadjs: [{
          minLength: 1,
          highlight: true,
    },{
        minlength: 1,
        name: 'citynames',
        displayKey: 'name',
        valueKey: 'name',
        source: citynames.ttAdapter()
    }],
    freeInput: true,
	maxTags: 10,
	trimValue: true,
	allowDuplicates: false,
});
