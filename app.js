async function getGif() {
    const $userInput = $('input').val();
    const gifAPIKey = "LMWzEdwGDD1iIyJc91eGt1xRG13aHprR";
    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { api_key: gifAPIKey, rating: 'g', q: $userInput } });
        $('<img>').appendTo('#gifsContainer').attr('src', response.data.data[0].images.fixed_height.url);
    } catch (error) {
        alert('We cannot find what you are looking for, please try again.')
    };

};

$('#searchButton').click(function (evt) {
    getGif();
    evt.preventDefault();
    $('input').val('');
});

$('#removeButton').click(function (evt) {
    $('#gifsContainer img').remove('img');
    evt.preventDefault();
});