const topLanguagesUsedInThisCity = [
    {
        languageName: 'Java',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {   
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            },
            {   
                login: 'billwu2',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            },
            {   
                login: 'billwu3',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            },
        ]
    },
    {
        languageName: 'Python',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    },
    {
        languageName: 'JavaScript',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    },
    {
        languageName: 'C++',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    },
    {
        languageName: 'Swift',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    },
    {
        languageName: 'CSS',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    },
    {
        languageName: 'HTML',
        topDevelopersWhoUseThisLanguageInThisCity: [
            {
                login: 'billwu',
                url: 'github.com',
                avatar: 'https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg',
                languagesUsed: [
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    },
                    { nameofLanguage: '',
                    totalAmountOfLinesWritees: 0
                    }
                ]
            }
        ]
    }]



const languages = [
    {
        name: 'Java',
        img: 'http://www.sclance.com/pngs/java-png/java_png_728079.png'
    },
    {
        name: 'JavaScript',
        img: 'https://banner2.kisspng.com/20180810/fvl/kisspng-javascript-comment-html-logo-international-confere-amp-quot-need-page-amp-quot-5b6d61dfbbdf29.2420070415338951357695.jpg'
    },
    {
        name: 'Python',
        img: 'https://pluralsight.imgix.net/paths/python-7be70baaac.png'
    },
    {
        name: 'CSS',
        img: 'https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png'
    },
    {
        name: 'HTML',
        img: 'https://ya-webdesign.com/images/svg-sites-html-5.png'
    },
    {
        name: 'SHELL',
        img: 'http://www.stickpng.com/assets/images/5954be4edeaf2c03413be356.png'
    },
    {
        name: 'C++',
        img: 'https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png'
    },
    {
        name: 'C',
        img: 'https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png'
    }
]

topLanguagesUsedInThisCity.map( item => {
    languages.map( i => {
        if(item.languageName === i.name){
            item.img = i.img
        }
    } )
} )

export default topLanguagesUsedInThisCity