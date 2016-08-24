var quotes = [
  {
    quote: "I think we risk becoming the best informed society that has ever died of ignorance.",
    author: "Ruben Blades"
  },
  {
    quote: "I know it sounds weird, but my definition of 'sexy' has changed as I've gotten older. And being smart and informed makes me feel sexier than any outfit.",
    author: "Sarah Shahi"
  },
  {
    quote: "If people are informed they will do the right thing. It's when they are not informed that they become hostages to prejudice.",
    author: "Charlayne Hunter-Gault"
  },
  {
    quote: "You can either be informed and your own rulers, or you can be ignorant and have someone else, who is not ignorant, rule over you.",
    author: "Julian Assange"
  },
  {
    quote: "I think we risk becoming the best informed society that has ever died of ignorance. Ruben Blades Knowledge, Best, Society Resignation, not mystic, not detached, but resignation open-eyed, conscious, and informed by love, is the only one of our feelings for which it is impossible to become a sham. Joseph Conrad Love, Impossible, Feelings I know it sounds weird, but my definition of 'sexy' has changed as I've gotten older. And being smart and informed makes me feel sexier than any outfit. Sarah Shahi Sexy, Smart, Weird Is it possible that literacy standards are falling because young Australians are growing up in a culture in which they can be entertained and informed, and in which they can communicate effectively, without having to master any but the most rudimentary literacy skills? Hugh Mackay Culture, Growing, Literacy You can always tell when a man's well informed. His views are pretty much like your own. H. Jackson Brown, Jr. Funny, Views If people are informed they will do the right thing. It's when they are not informed that they become hostages to prejudice. Charlayne Hunter-Gault Prejudice, Hostages Without question, we need to be informed of the happenings in the world. But modern communication brings into our homes a drowning cascade of the violence and misery of the worldwide human race. There comes a time when we need to find some peaceful spiritual renewal. James E. Faust Time, Spiritual, Violence For me, growing up in a ridiculously poor family living in dead-end neighborhoods, Superman was a deeply personal icon, one that said you can do anything if you put your mind to it. What he stood for formed the core of who I wanted to be as I grew up, and informed how I view the world and my responsibilities to other people. J. Michael Straczynski Family, Personal, Superman Art is pattern informed by sensibility. Herbert Read Art, Pattern If you think of life and death on a continuum, finding the point where it tips is complicated. It cuts across all political lines and gets to the root of our humanity. It requires faith informed by years of intimacy that you're doing what's right for your loved one. Eleanor Clift Life, Death, Faith It's like real life: We don't get a preview of what's coming up, thank God, and we don't build our own character from what we're going to be informed with in the future. Frances Conroy Life, God, Future National security laws must protect national security. But they must also protect the public trust and preserve the ability of an informed electorate to hold its government to account. Al Franken Trust, Government, Security Informed decision-making comes from a long tradition of guessing and then blaming others for inadequate results. Scott Adams Business, Others, Results You can either be informed and your own rulers, or you can be ignorant and have someone else, who is not ignorant, rule over you. Julian Assange Ignorant, Rule, Either Whenever I found out anything remarkable, I have thought it my duty to put down my discovery on paper, so that all ingenious people might be informed thereof. Antonie van Leeuwenhoek Discovery, Paper, Duty It might be liberating to think of human life as informed by losses and disappearances as much as by gifted appearances, allowing a more present participation and witness to the difficulty of living. David Whyte Life, Present, Difficulty It is not known precisely where angels dwell whether in the air, the void, or the planets. It has not been God's pleasure that we should be informed of their abode. Voltaire God, Angels, Dwell Citizenship is a tough occupation which obliges the citizen to make his own informed opinion and stand by it.",
    author: "Martha Gellhorn"
  }
]
$(document).ready(function(){
  var numb = quotes.length -1;
  var doc = quotes[Math.floor(Math.random() * numb)];
  $('#author').append("-" + doc.author);
  $('#quote').append('"' + doc.quote +'"');
});
