"use strict";
(function () {


    const getLastCommitEvent = (username) => {
        const URL = `https://api.github.com/users/${username}/events/public`

        return fetch(URL, {headers: {'Authorization': `token ${GITHUB_KEY}`}})
            .then(res => res.json())
            .then(results => results[0])
            .then(firstEvent => console.log(firstEvent.created_at))
            .catch(error => console.error(error))
    }

    getLastCommitEvent("jayarredondo");

})();