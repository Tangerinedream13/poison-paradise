# Toxic Match ☣️💘

## An AI Security and Data Poisoning Learning Experience

![Gemma and Rex at the Toxic Match beach villa](./public/images/toxic-match-hero)

**Toxic Match** is an interactive choose-your-own-adventure web application that teaches AI security, data poisoning, and digital evidence verification through a reality-dating-show-inspired narrative.

## The Core Question

**How can poisoned data and manipulated digital evidence influence AI systems and the people who trust them?**

## Project Overview

**Toxic Match** is an interactive “Choose Your Own Adventure” web application that teaches cybersecurity awareness through a dramatic reality dating show narrative.

Gemma and Rex meet again as returning contestants on *Toxic Match*, a fictional streaming reality dating show.

The show’s AI-powered Matchmaker claims that Gemma and Rex are a 98% compatible match. However, contestant profiles have been altered, private messages are appearing out of context, and the Matchmaker is producing increasingly suspicious recommendations.

Someone is poisoning the algorithm.

Rather than presenting AI security as highly technical and intimidating, this project makes it:

* Relatable
* Story-driven
* Playful but educational
* Grounded in cybersecurity research
* Focused on human trust and decision-making

The goal is to help learners understand that an AI system is only as trustworthy as the data, instructions, and evidence influencing it.

## Story Structure

The experience unfolds in three acts:

### Act 1: Second Chance

`match_found.exe`

Gemma arrives on *Toxic Match* and discovers that the Matchmaker has paired her with Rex, the suspicious romantic interest from **Sexy-Phish**.

Rex claims that someone altered his contestant profile.

### Act 2: Mixed Signals

`trust_the_algorithm.ai`

Compatibility scores begin changing, private conversations are leaked, and manipulated evidence turns contestants against one another.

Gemma must determine whether Rex is lying, whether his account has been compromised, or whether someone is corrupting the Matchmaker’s data.

### Act 3: Toxic Reveal

`poisoned_data.csv`

Gemma investigates the Matchmaker and discovers that false information has been inserted into the system.

She must identify the poisoned data, verify the evidence, and decide whether Rex is responsible - or being framed.

Each act includes 3 - 4 interactive decision points highlighting cybersecurity threats, unreliable evidence, and safe verification practices.

## Target Audience

This project is designed for:

* People who enjoy reality dating shows and interactive narratives
* Users who may not connect with traditional cybersecurity education
* Learners who are curious about artificial intelligence but do not have a technical background
* Students learning about data integrity, AI security, and human factors
* Learners who benefit from storytelling rather than lecture-based instruction

By embedding AI security concepts within romance tropes and reality television drama, **Toxic Match** reframes data poisoning and digital trust as modern, relatable, and human-centered cybersecurity issues.

## Educational Focus

The project explores:

* Data poisoning
* Model poisoning
* Data integrity
* Data provenance
* Artificial intelligence security
* AI overreliance
* Manipulated compatibility scores
* Deepfakes and synthetic media
* Account compromise
* Insider threats
* Source verification
* Confirmation bias
* Digital evidence verification
* Ethical considerations in artificial intelligence
* Human factors in cybersecurity

## Learning Objectives

After completing **Toxic Match**, learners should be able to:

1. Define data poisoning in accessible language.
2. Explain how manipulated data can influence an AI system.
3. Recognize that AI recommendations may be based on unreliable information.
4. Distinguish between a malicious user and a compromised account.
5. Question the authenticity of screenshots, audio recordings, profiles, and private messages.
6. Identify the importance of data integrity and provenance.
7. Verify important information through an independent source.
8. Recognize how confirmation bias can affect cybersecurity decisions.
9. Understand why familiarity, confidence, and compatibility scores are not proof of trustworthiness.
10. Know when to pause, verify, document, and report suspicious activity.

## Tech Stack

* React
* Vite
* JavaScript / JSX
* Chakra UI
* Railway
* Cloudflare DNS
* Shared design elements with **Sexy-Phish**
* Custom domain: TBD

## Creative Influences

* Reality dating shows and streaming competition formats 
* Romance novels and romantic comedy storytelling
* Artificial intelligence and technology-driven fiction
* Human-centered cybersecurity education
* Story continuity with **Sexy-Phish**

## Cybersecurity Education Suite

**Toxic Match** is the second project in a developing suite of interactive, story-based cybersecurity education tools.

### Sexy-Phish 💋🎣

Focuses on:

* Phishing
* Romance scams
* Credential harvesting
* Social engineering
* Emotional manipulation

### Toxic Match ☣️💘

Focuses on:

* Data and model poisoning
* AI system integrity
* Deepfakes
* Compromised accounts
* Digital evidence
* Algorithmic trust

Each application uses a different fictional narrative to make cybersecurity concepts accessible to learners who may not connect with conventional technical training.

The long-term goal is to create a cohesive suite of educational tools addressing both the technical and human sides of cybersecurity.

## Academic Foundation

**Toxic Match** is grounded in research on adversarial machine learning, data poisoning, dataset security, deepfakes, romance fraud, and game-based cybersecurity education.

These sources will help shape the story, vocabulary, learning objectives, security alerts, manipulated evidence, and interactive decisions throughout the project.

Vassilev et al. provide a standardized taxonomy for adversarial machine learning attacks, including poisoning attacks against predictive and generative AI systems. Their work will guide the project’s definitions of data poisoning, model poisoning, attacker goals, attack stages, and possible mitigations.

Cinà et al. explain how poisoned training data can reduce a model’s overall performance, manipulate individual predictions, or introduce hidden backdoors. This research will help shape the Matchmaker storyline and demonstrate that a compromised AI system may continue to appear normal while producing manipulated results under specific conditions.

Goldblum et al. examine dataset vulnerabilities, poisoning attacks, backdoor attacks, and potential defenses. Their work will inform the project’s focus on data integrity, dataset curation, trusted sources, suspicious records, hidden triggers, and the need to examine where information originated.

Cross connects artificial intelligence and deepfake technology to romance fraud. This research supports the project’s use of manipulated contestant images, synthetic audio, false identities, and digital evidence that may appear authentic even when it has been fabricated.

Hart et al. demonstrate how serious games can complement traditional cybersecurity instruction by allowing nontechnical learners to practice security concepts within an active learning environment. Their work supports the project’s decision-based format and its focus on learning through participation rather than passive instruction.

Ng and Hasan’s systematic review examines the development of cybersecurity serious games and identifies the need for accessible games that address both technical and human-centered cybersecurity topics. Their findings support the broader mission of creating narrative cybersecurity tools for learners without extensive prior knowledge.


## References

[1] Vassilev, A., Oprea, A., Fordyce, A., Anderson, H., Davies, X., & Hamin, M. (2025). *Adversarial machine learning: A taxonomy and terminology of attacks and mitigations*. NIST AI 100-2e2025. https://doi.org/10.6028/NIST.AI.100-2e2025

[2] Cinà, A. E., Grosse, K., Demontis, A., Biggio, B., Roli, F., & Pelillo, M. (2024). Machine learning security against data poisoning: Are we there yet? *Computer, 57*(3), 26–34. https://doi.org/10.1109/MC.2023.3299572

[3] Goldblum, M., Tsipras, D., Xie, C., Chen, X., Schwarzschild, A., Song, D., Madry, A., Li, B., & Goldstein, T. (2023). Dataset security for machine learning: Data poisoning, backdoor attacks, and defenses. *IEEE Transactions on Pattern Analysis and Machine Intelligence, 45*(2), 1563–1580. https://doi.org/10.1109/TPAMI.2022.3162397

[4] Cross, C. (2022). Using artificial intelligence and deepfakes to deceive victims: The need to rethink current romance fraud prevention messaging. *Crime Prevention and Community Safety, 24*, 30–41. https://doi.org/10.1057/s41300-021-00134-w

[5] Hart, S., Margheri, A., Paci, F., & Sassone, V. (2020). Riskio: A serious game for cyber security awareness and education. *Computers & Security, 95*, 101827. https://doi.org/10.1016/j.cose.2020.101827

[6] Ng, C. Y., & Hasan, M. K. B. (2025). Cybersecurity serious games development: A systematic review. *Computers & Security, 150*, 104307. https://doi.org/10.1016/j.cose.2024.104307

## About the Author

Built by **Maria Haddon**

Part of a developing human-centered cybersecurity education suite

```bash
npm run dev
```

---

*Toxic Match is an independent educational project featuring an original fictional reality dating show. It is not affiliated with, sponsored by, or endorsed by Netflix or any existing television program.*
>>>>>>> origin/main
