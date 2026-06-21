const STORE = {
    QUERY_SELECTOR_PROJECTS : "details[data-xp]",
    DATASET_SELECTOR_PROJECTS : "xp",
    QUERY_SELECTOR_TAGS : ".tag",
    DATASET_SELECTOR_TAGS : "tag",
    endpoints : [
        `randomness`,
        `html`,
        `css`,
        `jsdoc`,
        `javascript`,
        `software testing`,
        `state management`,
        `seo`,
        `accessibility`,
        `authentication`,
        `software architecture`,
        `nodejs`,
        `reactjs`,
        `mongodb`,
        `sql`,
    ],
    activeEndpoints : new Set(),
    activeEndpoint : "",
    countEndpoints() { return this.activeEndpoints.size },
    getIndexOfEndpoint(endpoint) {
        // any string not in 'endpoints' returns zero
        let index = (endpoint && this.endpoints.indexOf(endpoint))
            ? this.endpoints.indexOf(endpoint) 
            : 0
        if (index > 0) return index
        return 0
    },
}