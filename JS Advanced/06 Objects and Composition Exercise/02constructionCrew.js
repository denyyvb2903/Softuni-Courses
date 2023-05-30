function constructionCrew(obj) {

    let newObj = { ...obj }

    if (newObj.dizziness === true) {
        newObj.levelOfHydrated += 0.1 * newObj.weight * newObj.experience
        newObj.dizziness = false
    } 

    return newObj

}


constructionCrew
    ({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    })