const information = {

    sortData(data, select) {

        let orderArray;
        switch (select) {

            case 1:
                // Name/Ascendente

                orderArray = data.sort(function(a, b) {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break;

            case 2:
                //name/descendente

                orderArray = data.sort(function(a, b) {
                    if (b.name < a.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
                break;

            case 3:
                //id/ascedente


                orderArray = data.sort(function(a, b) {
                    return (a.id - b.id)
                })
                break;

            case 4:
                //id/descendente

                orderArray = data.sort(function(a, b) {
                    return (b.id - a.id)
                })
                break;
            default:
        }

        return orderArray




    },
    filterData(data, select) {

        let filterArray;
        switch (select) {


            case 1:
                // Alives

                filterArray = data.filter(function(data) {
                    return data.status === 'Alive';
                })

                break;

            case 2:
                //Deads

                filterArray = data.filter(function(data) {
                    return data.status === 'Dead';
                })


                break;

            case 3:
                //Humans


                filterArray = data.filter(function(data) {
                    return data.species === 'Human';
                })
                break;

            case 4:
                //Aliens


                filterArray = data.filter(function(data) {
                    return data.species === 'Alien';
                })
                break;

            case 5:
                //Humanoid


                filterArray = data.filter(function(data) {
                    return data.species === 'Humanoid'
                })
                break;

            case 6:
                //Poopybuttholes


                filterArray = data.filter(function(data) {
                    return data.species === 'Poopybutthole'
                })
                break;
            case 7:
                //Cronenbergs


                filterArray = data.filter(function(data) {
                    return data.species === 'Cronenberg'
                })
                break;

            case 8:
                //Males


                filterArray = data.filter(function(data) {
                    return data.gender === 'Male'
                })
                break;
            case 9:
                //Females


                filterArray = data.filter(function(data) {
                    return data.gender === 'Female'
                })
                break;
            default:
                return data
        }
        return filterArray




    },

    findData(input, data) {

        let search

        search = data.filter(function(data) {
            return data.name === input
        })
        return search
    }
}


export default information