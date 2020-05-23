 const siteMetadata = {
    title: `Wallis Pom`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Software Engineer`,
    description: `Hi, I'm Wallis, a 4th year Computer Engineering Student at Queen's University. Check out my work!`,
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        // {
        //     name: "PORTFOLIO",
        //     url: "/portfolio"
        // },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    social: [
        // {
        //     name: "Facebook",
        //     icon: "/images/Facebook.svg",
        //     url: "#"
        // },
        {
            name: "Twitter",
            icon: "/images/twitter-2.svg",
            url: "https://twitter.com/WallisPom"
        },
        {
            name: "Linkedin",
            icon: "/images/linkedin-2.svg",
            url: "https://www.linkedin.com/in/wallispom/",
        },
        {
            name: "Github",
            icon: "/images/github-7.svg",
            url: "https://github.com/WallisPom"
        }
        // {
        //     name: "Instagram",
        //     icon: "/images/Instagram.svg",
        //     url: "#"
        // },
        // {
        //     name: "Youtube",
        //     icon: "/images/Youtube.svg",
        //     url: "#"
        // }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Reach out to me below!`,
        mail: "wallis.pom@gmail.com",
        // phone: "000-000-0000",
        // address: "1234 \nLocation \nLocation"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    },
]

if(siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: siteMetadata.disqus
        }
    })
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
