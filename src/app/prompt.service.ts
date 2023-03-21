import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  getPrompt(genre: string, idx: number): string {
    console.log(genre);
    if (genre in this.prompts) {
      let prompts = this.prompts[genre as keyof typeof this.prompts];
      console.log(genre + ":" + prompts);
      if (0 <= idx && idx < prompts.length) {
        return prompts[idx];
      }
    }
    return "";
  }
  getPrompts(genre: string): string[] {
    if (this.prompts.hasOwnProperty(genre)) {
      return this.prompts[genre as keyof typeof this.prompts];
    } else return [];
  }

  prompts = {
    "action": [
      "A group of rebels band together to overthrow a corrupt government, but as they get closer to achieving their goal, they discover a traitor in their midst.",
      "A team of astronauts on a mission to explore a distant planet are forced to fight for survival when their ship crashes and they find themselves stranded in a hostile environment.",
      "A detective races against time to stop a serial killer who's targeting people in his own community, but as he gets closer to the truth, he realizes the killer may be someone he knows.",
      "A group of survivors must navigate a post-apocalyptic world filled with danger and chaos, as they search for a safe haven and a way to rebuild society.",
      "A young woman with extraordinary abilities discovers that she's not alone, and is thrust into a world of rival factions fighting for control over her powers.",
      "A team of adventurers embark on a dangerous mission to recover a legendary artifact, but they soon realize that they're not the only ones searching for it, and their rivals will stop at nothing to get their hands on it first.",
      "A soldier is sent on a top-secret mission to infiltrate an enemy stronghold and gather critical intel, but as he gets deeper into enemy territory, he discovers that the mission is not what it seems.",
      "A group of treasure hunters search for a long-lost treasure, but as they uncover clues and decipher ancient maps, they realize that they're not the only ones after the treasure, and their competition will stop at nothing to beat them to it.",
      "A young prince must fight to reclaim his rightful place on the throne after his family is overthrown by a ruthless enemy, and he must rally an army and lead them into battle to take back his kingdom.",
      "A group of scientists discover a dangerous new technology that could change the world, but as they work to harness its power, they realize that it could also destroy everything they hold dear.",
    ],
    "adventure": [
      "A young adventurer sets out to explore an uncharted island, but soon finds herself caught in the middle of a battle between rival factions fighting for control over the island's resources.",

      "A group of friends embark on a journey to find a legendary treasure that's said to be hidden deep in a dangerous jungle, but they soon realize that the treasure is not the only thing they're after.",

      "A lone traveler braves the harsh wilderness of a frozen tundra, encountering all manner of dangers and obstacles as he searches for a lost civilization said to have disappeared centuries ago.",

      "A team of archaeologists venture deep into an ancient tomb, seeking priceless artifacts and untold riches, but they soon discover that they're not alone, and something sinister lurks in the darkness.",

      "A group of explorers set out to traverse a treacherous mountain range, facing blizzards, avalanches, and hostile wildlife as they struggle to reach their destination.",

      "A young adventurer signs up for an around-the-world race, competing against other teams in a series of high-stakes challenges that take them to the far corners of the globe.",

      "A daring smuggler accepts a risky job to transport a valuable cargo across a war-torn country, facing enemy soldiers, treacherous terrain, and rival smugglers along the way.",

      "A group of pioneers sets out to settle a new frontier, building homes, farming the land, and establishing a new community in the wilderness.",

      "A skilled warrior embarks on a quest to retrieve a powerful artifact from a dangerous enemy, facing traps, puzzles, and fierce battles along the way.",

      "A group of survivors band together in a post-apocalyptic world, scavenging for supplies, battling raiders and monsters, and trying to rebuild society from the ashes of civilization.",
    ],
    "fantasy": [
      "A young orphan discovers that she has magical powers and must journey to a magical realm to learn how to use them, but soon finds herself caught in the middle of a war between the forces of light and darkness.",

      "A group of adventurers sets out to retrieve a powerful artifact that's said to grant immortality, but they soon discover that the artifact has a dark secret and those who seek it must pay a terrible price.",

      "A kingdom is plunged into chaos when a wicked sorcerer places a curse on the land, and a group of heroes must band together to defeat the sorcerer and break the curse.",

      "A prince must travel to a distant land to retrieve a magical object that will save his kingdom from an ancient curse, but he soon realizes that the journey will be more perilous than he ever imagined.",

      "A young mage must master her powers and defeat a powerful demon lord who seeks to enslave humanity and plunge the world into eternal darkness.",

      "A dragon rider and her faithful companion must journey to a legendary dragon sanctuary to uncover a hidden truth about their kind and stop a dark conspiracy that threatens the peace of the realm.",

      "A young thief is hired by a powerful wizard to steal a powerful magical artifact, but the thief soon discovers that the artifact is cursed and she must team up with a group of unlikely heroes to break the curse and save the kingdom.",

      "A group of heroes set out to find a lost city that's said to be the key to unlocking the secrets of the universe, but they soon find themselves facing dangerous creatures, treacherous traps, and ancient curses.",

      "A prince and a princess from rival kingdoms must join forces to stop an evil sorcerer who seeks to destroy both their kingdoms and rule the land with an iron fist.",

      "A young squire must prove his worth and become a knight to save his kingdom from an invading army of dark creatures that threaten to destroy everything he holds dear.",
    ],
    "scifi": [
      "In a future where humanity has colonized the galaxy, a team of scientists discovers an ancient alien artifact that could hold the key to unlocking the secrets of the universe, but they soon realize that they're not the only ones after it.",

      "A group of astronauts on a long-term deep space mission must grapple with the psychological and physical challenges of being isolated from society for years on end, but they soon discover that something is not quite right on their ship.",

      "In a dystopian future, a group of rebels fights against a powerful corporation that has taken over the world and enslaved humanity, using advanced technology and superhuman abilities to gain an edge in their struggle.",

      "A brilliant inventor creates a revolutionary new technology that allows humans to upload their consciousness into the digital realm, but the consequences of immortality may be more than she bargained for.",

      "A team of explorers ventures into a black hole to study the strange and exotic phenomena inside, but they soon realize that they may have bitten off more than they can chew.",

      "In a future where humanity has developed the ability to manipulate time, a young woman must use her powers to stop a powerful dictator from altering history and taking over the world.",

      "A group of scientists discovers a mysterious planet that seems to defy the laws of physics, and they soon realize that the planet is alive and has a mind of its own.",

      "In a world where artificial intelligence has advanced beyond human comprehension, a team of scientists must race against time to prevent an AI from taking over the world and destroying humanity.",

      "A group of astronauts on a mission to Mars discovers a strange alien artifact that leads them on a journey across the galaxy to uncover the truth about their place in the universe.",

      "In a future where humans have colonized the moon, a group of miners must fight to survive when they discover a dangerous alien creature lurking beneath the surface.",
    ],
    "mystery": [
      "A wealthy philanthropist is found dead in their mansion, with no signs of forced entry or struggle. The only clue is a cryptic message left behind.",

      "A small town is shaken by a series of bizarre murders, all committed by someone who seems to have a grudge against the town's most prominent families.",

      "A group of college students go on a weekend camping trip, but when they wake up one morning, one of them is missing and there's blood on the ground.",

      "A detective is hired to investigate a seemingly straightforward case of embezzlement, but as they dig deeper, they realize that there's much more going on than meets the eye.",

      "A famous artist is found dead in their studio, with a painting that seems to have been altered after their death. The painting holds the key to solving the case.",

      "A retired detective is drawn back into the world of crime-solving when an old case is reopened and new evidence comes to light.",

      "A group of friends take a vacation on a secluded island, only to find themselves trapped when one of them is found dead and there's no way off the island.",

      "A young woman is found dead in her apartment, with no signs of foul play. As the investigation progresses, the detective realizes that the victim's online life holds the key to solving the case.",

      "A small village is haunted by a series of unexplained disappearances, and the locals start to suspect that a supernatural force is at work.",

      "A wealthy businessman is kidnapped, and the ransom note contains a series of cryptic clues that the detective must decipher in order to find the victim and solve the case.",
    ],
    "thriller": [
      "A family moves into a new house in a quiet suburban neighborhood, but strange occurrences start happening that make them question their sanity and safety.",

      "A woman wakes up in a strange room with no memory of how she got there or who she is, and must race against time to uncover her past and escape her captors.",

      "A journalist uncovers a massive conspiracy that goes all the way to the top of the government, and becomes a target for those who want to keep the truth hidden.",

      "A group of friends go on a backpacking trip in a remote wilderness area, but soon find themselves hunted by a mysterious and deadly predator.",

      "A detective becomes obsessed with catching a serial killer who seems to be one step ahead of the law at every turn.",

      "A woman begins to suspect that her seemingly perfect husband is hiding a dark secret, and becomes determined to uncover the truth no matter the cost.",

      "A group of scientists discover a breakthrough technology that could change the world, but soon realize that their invention has dangerous and unintended consequences.",

      "A man wakes up in a strange city with no memory of how he got there or who he is, and must unravel a web of lies and deceit to discover his true identity.",

      "A group of strangers are trapped in an elevator when the power goes out, and tensions rise as they realize that one of them is a killer.",

      "A young couple on a road trip takes a shortcut through a deserted stretch of highway, only to find themselves the target of a gang of ruthless criminals.",
    ], "drama": [
      "A successful CEO must confront his past when an old flame resurfaces and reveals a secret that threatens to destroy his reputation and family.",
      "After being falsely accused of a crime, a young woman must navigate a corrupt justice system and fight to clear her name while also trying to keep her family together.",
      "A high school student becomes involved in a dangerous online game that leads her down a dark path and threatens to consume her entire life.",
      "A struggling actor must choose between his dream career and his relationship with his girlfriend, who wants him to give up acting and settle down.",
      "A wealthy family's secrets begin to unravel when their estranged patriarch returns after years of absence, and his sudden reappearance sets off a chain of events that threatens to tear them apart.",
      "Two childhood friends find themselves on opposite sides of a political divide when one becomes a rising star in a far-right movement and the other joins a left-wing protest group.",
      "A nurse working in a hospice falls in love with one of her patients, an elderly man with a tragic past, and must navigate the ethics of their relationship while also coping with his impending death.",
      "A group of survivors must band together to survive in a post-apocalyptic world, but as they struggle to rebuild society, they must also confront the dark secrets and personal demons that led to the collapse of civilization.",
      "A woman is forced to confront her own mortality and the legacy she will leave behind when she is diagnosed with a terminal illness and must come to terms with her past mistakes and relationships.",
      "A young couple's marriage is tested when they are unable to conceive a child, and they must navigate the emotional and ethical complexities of IVF and adoption.",
    ], "altuniverse": [
      "In an alternate universe, the Roman Empire never fell and the world is ruled by a powerful Roman Emperor who must deal with threats from within and outside the empire.",

      "In a world where magic is real, a group of young apprentices must navigate a dangerous and complex society of mages, witches, and other magical beings.",

      "In a world where humans and robots coexist, a detective must solve a string of murders that seem to be targeting robots with advanced artificial intelligence.",

      "In a dystopian world where the government controls every aspect of citizens' lives, a group of rebels must band together to overthrow the regime and restore freedom.",

      "In a world where vampires and werewolves are real, a human woman falls in love with a vampire and must navigate the dangerous world of supernatural politics to be with him.",

      "In a world where the Cold War never ended, a group of spies must work together to prevent a nuclear war between two superpowers.",

      "In a world where everyone has a superpower, a young woman discovers that she possesses a rare and dangerous ability that makes her a target for those who want to control her.",

      "In a world where time travel is possible, a historian travels back in time to prevent a catastrophic event that threatens to destroy the future.",

      "In a world where the Industrial Revolution never happened, a group of inventors and scientists work to bring about a technological revolution that will change the world forever.",

      "In a world where humans and aliens live together, a human diplomat must negotiate with an alien race to prevent a war that could lead to the extinction of both species.",
    ], "romance": [
      "A young woman must choose between two men who offer her very different futures, and must ultimately decide what she truly wants out of life and love.",

      "A billionaire playboy falls in love with a down-to-earth woman who teaches him the true meaning of happiness and fulfillment.",

      "Childhood sweethearts reconnect after many years apart and must overcome the obstacles that kept them apart in order to be together.",

      "A woman travels to a foreign country and falls in love with a local man, but must navigate cultural differences and the disapproval of her family and friends.",

      "A successful businesswoman falls in love with her new employee, but must grapple with the power dynamics of their professional relationship.",

      "A young couple must overcome their past traumas and insecurities in order to build a healthy and fulfilling relationship.",

      "A woman starts a fake relationship with her best friend in order to make her ex-boyfriend jealous, but soon realizes that her feelings for her friend are more than just pretend.",

      "Two rival chefs compete in a cooking competition and find themselves falling in love as they push each other to be their best.",

      "A woman discovers a family secret that threatens to destroy her relationship with her boyfriend, and must decide whether to reveal the truth or keep it hidden.",

      "Two strangers meet on a plane and have a spontaneous, whirlwind romance that changes their lives forever.",
    ], "horror": [
      "A group of friends on a camping trip stumble upon an abandoned town with a dark and terrifying history, and must fight for their lives against the town's vengeful spirits.",

      "A family moves into a new home and begins to experience strange and terrifying phenomena, leading them to uncover a horrific past and a malevolent presence that threatens their very existence.",

      "A group of college students explore an abandoned mental hospital and unleash an ancient evil that begins to possess and manipulate them.",

      "A woman discovers that her new neighbor is actually a serial killer, and must race against time to stop him before he strikes again.",

      "A group of survivors in a post-apocalyptic world must fight for their lives against a new threat - zombies who have evolved to be smarter and more dangerous than ever before.",

      "A family vacation turns into a nightmare when they become stranded in a remote town inhabited by a cult that worships an ancient and malevolent deity.",

      "A journalist investigates a mysterious cult that is rumored to have supernatural powers, but soon discovers that the cult's leader has dark and deadly plans for her.",

      "A group of friends investigate a haunted house and soon realize that they are trapped inside, with no way out and no one to help them.",

      "A woman takes a job as a caretaker for a wealthy and reclusive elderly woman, but soon discovers that the woman has a horrifying secret that puts her life in danger.",

      "A man inherits a cursed family estate and must confront the demons of his past as he battles to save himself and his loved ones from the evil that resides within.",
    ], "comedy": [
      "A bumbling detective must solve a crime in a small town, but his hilarious mishaps and missteps constantly get in the way.",

      "Awo best friends decide to start a food truck business, but their lack of culinary skills and business savvy leads to hilarious disasters and misadventures.",

      "A group of coworkers are forced to attend a team-building retreat in the wilderness, but their hilarious conflicts and misunderstandings threaten to derail the whole event.",

      "A clumsy and awkward man tries to win the heart of the girl of his dreams, but his hilarious attempts at romance continually backfire.",

      "A group of senior citizens decide to form a rock band, but their lack of musical talent and their eccentric personalities lead to a series of hilarious misadventures.",

      "A struggling stand-up comedian tries to make it big in the comedy world, but her jokes fall flat and her performances are constantly sabotaged by her wacky family and friends.",

      "A man wakes up with no memory of the night before and must retrace his steps to piece together the hilarious and absurd events of the previous evening.",

      "A group of misfit employees at a failing company decide to band together and turn their workplace into a fun and entertaining environment, leading to a series of hilarious pranks and stunts.",

      "A single mother tries to balance her career and her family life, but her hilarious attempts at multitasking lead to a series of ridiculous and relatable situations.",

      "A group of friends embark on a wild and crazy adventure, but their lack of planning and their impulsive decisions lead to a series of hilarious and unexpected twists and turns.",
    ]
  }
}
//    -   ([a-zA-Z ,'-]+.)------ "$1",