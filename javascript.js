var quotes = [
	"If you stand for nothing Burr what'll you fall for? -Hamilton",
	"I'm just like my country,I'm young, scrappy, and hungry, and I am not throwing away my shot. -Hamilton",
	"The plan is to fan this spark into a flame.” -Hamilton",
	"I'm past patiently waitin' I'm passionately smashin’ every expectation. Every action's an act of creation! -Hamilton",
	"You want a revolution? I want a revelation. So listen to my declaration:'We hold these truths to be self-evident that all men are created equal.' And when I meet Thomas Jefferson, I'ma compel him to include women in the sequel! -Angelica Schuyler",
	"I am the one thing in life I can control. I am inimitable, I am an original. -Burr",
	"Immigrants: we get the job done. -Hamilton and Lafayette",
	"Hercules Mulligan I need no introduction. When you knock me down I get the F**K back up again. -Mulligan",
	"How to account for his rise to the top? Man, the man is non-stop. -Burr",
	"What are you waiting for? What do stall for? -Hamilton",
	"When you got skin in the game, you stay in the game. But you don't get a win unless you play in the game. Oh, you get love for it. You get hate for it. You get nothing if you...Wait for it, wait for it, wait! -Hamilton",
	"I will not equivocate on my opinion-I have always worn it on my sleeve. -Hamilton",
	"There's a million things I haven't done, just you wait -Hamilton",
	"A civic lesson from a slaver? Hey Neighbor,Your debts are paid cuz you don't pay for labor, 'We plant seeds in the South. We create.'Yeah, keep ranting. We know who's really doing the planting -Hamilton",
	"I Practiced The Law, I Practically Perfected It -Hamilton",
	"Laughing At My Sister Cuz She Wants To Start A Harem. I'm Just Saying, If You Really Loved Me You Would Share Him -Eliza and Angelica Schyler",
	"Don't Modulate The Key And Not Debate With Me -Hamilton",
	"Burr, you disgust me. Ah, so you've discussed me. I'm a trust fund,babby,you can trust me! -Angelica and Burr"

]



function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		
		document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
}