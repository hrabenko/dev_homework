class Warrior {
    constructor() {
        this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
        this.warriorExperience = 100;
        this.warriorLevel = Math.floor(this.warriorExperience / 100);
        this.warriorRank = this.ranks[Math.floor(this.warriorLevel / 10)];
        this.warriorAchievements = [];
    }

    level() {
        return this.warriorLevel;
    }

    rank() {
        return this.warriorRank;
    }

    experience() {
        return this.warriorExperience;
    }

    training ([newAchievement, newExperience, minLevel]) {
        if (this.warriorLevel >= minLevel ) {
            this.addExperience(newExperience);
            this.warriorAchievements.push(newAchievement);
            this.update(this.warriorExperience);
            return newAchievement;
        }

        return "Not strong enough";
    }

    battle (enemyLevel) {
        if (enemyLevel <= 0 || enemyLevel > 100) {
            return "Invalid level";
        }

        let enemyRankIndex = Math.floor(enemyLevel / 10);
        let warriorRankIndex = Math.floor(this.warriorLevel / 10);

        if (enemyLevel === this.warriorLevel) {
            this.addExperience(10);
            this.update(this.warriorExperience);
            return "A good fight";
        } else if (this.warriorLevel - enemyLevel === 1) {
            this.addExperience(5);
            this.update(this.warriorExperience);
            return "A good fight";
        } else if (this.warriorLevel - enemyLevel >= 2) {
            return "Easy fight";
        } else if (enemyLevel - this.warriorLevel >= 5 &&  enemyRankIndex > warriorRankIndex) {
            return "You've been defeated";
        } else if (this.warriorLevel < enemyLevel) {
            let diff = enemyLevel - this.warriorLevel;
            this.addExperience(20 * diff * diff);
            this.update(this.warriorExperience);
            return "An intense fight";
        }

    }

    achievements () {
        return this.warriorAchievements;
    }

    addExperience (experience) {
        if (this.warriorExperience < 10000 && this.warriorExperience + experience < 10000) {
            this.warriorExperience += experience;
        } else if (this.warriorExperience < 10000 && this.warriorExperience + experience > 10000) {
            this.warriorExperience = 10000;
        }
    }

    update (experience) {
        this.warriorLevel = Math.floor(experience / 100);
        this.warriorRank = this.ranks[Math.floor(this.warriorLevel / 10)];
    }
}