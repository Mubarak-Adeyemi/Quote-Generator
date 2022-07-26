let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let newQuote = document.querySelector('.btn');
// console.log(newQuote)

const  quotes = [
    {
        quote: '“Nothing hurts a good soul and a kind heart more than to live amongst people who cannot understand it.”',
        person: 'Ali Ibn Abu-Talib' 
    }, {
        quote: '“Life consists of two days, one for you one against you. So when it\'s for you don\'t be proud or reckless, and when it\'s against you be patient, for both days are test for you.”',
        person: 'Ali Ibn Abu-Talib' 
    }, {
        quote: '“The best deed of a great man is to forgive and forget.”',
        person: 'Ali Ibn Abu-Talib' 
    }, {
        quote: '“When the world pushes you to your knees, you\'re in the perfect position to pray”',
        person: 'Ali Ibn Abu-Talib' 
    }, {
        quote: '“He who trusts the world, the world betrays him.”' ,
        person: 'Ali Ibn Abu-Talib'
    }, {
        quote: 'Woman is a delicate creature with strong emotions who has been created by the Almighty God to shoulder responsibility for educating society and moving toward perfection. God created woman as symbol of His own beauty and to give solace to her partner and her family.”',
        person: 'Ali Ibn Abu-Talib'
    }, {
        quote: '“You were ordered to obey to Allah, and you were create to perform good deeds.”',
        person: 'Ali Ibn Abu-Talib'
    }, {
        quote: '“Honesty will guide you to goodness, and goodness will invite you to heaven.”',
        person: 'Ali Ibn Abu-Talib'
    }, {
        quote: '“Be like a flower that gives its fragrance even to the hand that crushed it.”',
        person: 'Ali Ibn Abu-Talib'
    }, {
        quote: '“Listen with ears of tolerance! See through the eyes of compassion! Speak with the language of love.”',
        person: 'Rumi'
    }, {
        quote: '“Whenever you are alone, remind yourself that God has sent everyone else away so that there is only you and Him.”',
        person: 'Rumi'
    }, {
        quote: '“A Candle never Loses any of its Light while Lighting up another candle.”',
        person: 'Rumi'
    }, {
        quote: '“In this life many demolitions are actually renovations.”',
        person: 'Rumi'
    }, {
        quote: '“Hardship may dishearten at first, but every hardship passes away. All despair is followed by hope; all darkness is followed by sunshine.”',
        person: 'Rumi'
    }, {
        quote: '“Don’t depend too much on anyone in this world because even your own shadow leaves you when you are in darkness.”',
        person: 'Ibn Taymiyyah'
    }, {
        quote: '“Allah will support the just state even if it is led by unbelievers, but Allah will not support the oppressive state even if it is led by believers.”',
        person: 'Ibn Taymiyyah'
    }, {
        quote: '“Dhikr (remembrance of Allah) is to the heart as water is to a fish; see what happens to a fish when it is taken out of water.”',
        person: 'Ibn Taymiyyah'
    }, {
        quote: '“When people help one another in sin and transgression, they finish by hating each other.”',
        person: 'Ibn Taymiyyah'
    }, {
        quote: '“When someone offends me, I think it’s a gift from Allah (god). He (Allah) is teaching me humility.”',
        person: 'Ibn Taymiyyah'
    }, {
        quote: '“Happiness is attained by three things: being patient when tested, being thankful when receiving a blessing, and being repentant upon sinning.”',
        person: 'Ibn Qayyim Al-Jawziyya'
    }, {
        quote: '“This wordly life is like a shadow. If you try to catch it, you will never be able to do so. If you turn your back towards it, it has no choice but to follow you.”',
        person: 'Ibn Qayyim Al-Jawziyya'
    }, {
        quote: '“A real man is one who fears the death of his heart, not of his body.”',
        person: 'Ibn Qayyim Al-Jawziyya'
    }, {
        quote: '“Women are one half of society which gives birth to the other half so it is as if they are the entire society.”',
        person: 'Ibn Qayyim Al-Jawziyya'
    }, {
        quote: '“How strange! You lose a little from you and you cry. And your whole life is wasting and you\'re laughing.”',
        person: 'Ibn Qayyim Al-Jawziyya'
    }, {
        quote: '“Throughout history many nations have suffered a physical defeat, but that has never marked the end of a nation. But when a nation has become the victim of a psychological defeat, then that marks the end of a nation.”',
        person: 'Ibn Khaldun'
    }, {
        quote: '“The past resembles the future more than one drop of water resembles another.”',
        person: 'Ibn Khaldun'
    }, {
        quote: '“Man is essentially ignorant, and becomes learned through acquiring knowledge.”',
        person: 'Ibn Khaldun'
    }, {
        quote: '“Man is the child of customs, not the child of his ancestors.”',
        person: 'Ibn Khaldun'
    }, {
        quote: '“Habits are qualities of the soul.”',
        person: 'Ibn Khaldun'
    }, {
        quote: '“You say that you are just a body, but inside of you is something greater than the Universe.”',
        person: 'Al-Shafi‘i'
    }, {
        quote: '“How strange! You seek guidance, yet you do not tread its path, surely a boat does not sail on land.”',
        person: 'Al-Shafi‘i'
    }, {
        quote: '“The loftiest in status are those who do not know their own status, and the most virtuous of them are those who do not know their own virtue.”',
        person: 'Al-Shafi‘i'
    }, {
        quote: '“Do not vie with others in the accumulation of wealth. Vie with them in Ibadaah(act of worship).”',
        person: 'Al-Shafi‘i'
    }, {
        quote: '“Only someone who is sincere recognizes what showing off is.”',
        person: 'Al-Shafi‘i'
    }, {
        quote: '“He who practices Tasawwuf without learning Sacred Law corrupts his faith, while he who learns Sacred Law without practicing Tasawwuf corrupts himself.\
        Only he who combines the two proves true.”',
        person: 'Malik ibn Anas'
    }, {
        quote: '“Only that which was effective for the first of this community will be effective for the last of it.”',
        person: 'Malik ibn Anas'
    }, {
        quote: '“Do not allow your heart to take pleasure with the praises of people, nor be saddened by their condemnation.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“To get what you love, you must first be patient with what you hate.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“Desires make slaves out of kings and patience makes kings out of slaves.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“Those who look for seashells will find seashells; those who open them will find pearls.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“Each of your breaths is a priceless jewel, since each of them is irreplaceable and once gone, can never be retrieved.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“A human-being is not a human-being while his tendencies include self-indulgence, covetousness, temper and attacking other people.”',
        person: 'Al-Ghazali'
    }, {
        quote: '“How can the heart travel to God, when it is chained by its desires?”',
        person: 'Ibn Arabi'
    }, {
        quote: '“The ignorant one does not see his ignorance as he basks in its darkness; nor does the knowledgeable one see his own knowledge, for he basks in its light.”',
        person: 'Ibn Arabi'
    }, 
];

newQuote.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 

})