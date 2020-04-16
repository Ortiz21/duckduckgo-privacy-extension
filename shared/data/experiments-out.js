module.exports = {
    _: {},
    r: {
        name: 'privacy_nudge',
        description: 'Privacy nudge experiment',
        atbExperiments: {
            'y': {
                description: 'Privacy nudge control group',
                settings: {
                    bannerEnabled: false
                }
            },
            'z': {
                description: 'Privacy nudge experiment group',
                settings: {
                    bannerEnabled: true
                }
            }
        }
    },
    l: {
        name: 'full tracker list',
        description: 'Testing full Tracker Radar list',
        atbExperiments: {
            'm': {
                description: 'Full list control group',
                settings: false
            },
            'n': {
                descripiton: 'Full list experiment group',
                settings: {
                    name: 'tds',
                    url: 'https://staticcdn.duckduckgo.com/trackerblocking/lm/tds.json',
                    format: 'json'
                }
            }
        }
    }
}
