import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  getPrompt(genre: string, idx: number): string {
    if (genre in this.prompts) {
      let prompts = this.prompts[genre as keyof typeof this.prompts];
      if (0 <= idx && idx < prompts.length) {
        return prompts[0];
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
  }

}
//       ([a-zA-Z ,'-]+.)------ "$1",