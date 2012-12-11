function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
        'deck/Cover.jpg',
        'deck/Team.jpg',
        'deck/Problem1.jpg',
        'deck/Problem2.jpg',
        'deck/Problem3.jpg',
        'deck/Market.jpg',
        'deck/Trend.jpg',
        'deck/GoToMarket1.jpg',
        'deck/GoToMarket2.jpg',
        'deck/AndMore1.jpg',
        'deck/AndMore2.jpg',
        'deck/Revenue.jpg',
        'deck/Financials.jpg'
]);
