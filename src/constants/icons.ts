const icons = [
  {
    name: "Gitea",
    category: "technology",
    classes: ["gitea"],
    url: "gitea.com",
  },
  {
    name: "Solana",
    category: "technology",
    classes: ["solana", "solana-horizontal", "solana-horizontal-light"],
    url: "solana.com",
  },
  {
    name: "Gitlab",
    category: "technology",
    classes: ["gitlab", "gitlab-horizontal", "gitlab-horizontal-light"],
    url: "gitlab.com",
  },
  {
    name: "Postman",
    category: "technology",
    classes: ["postman", "postman-horizontal"],
    url: "postman.com",
  },
  {
    name: "expressjs",
    category: "technology",
    classes: ["expressjs", "expressjs-wordmark"],
    url: "expressjs.com",
  },
  {
    name: "jQuery",
    category: "technology",
    classes: ["jquery", "jquery-horizontal"],
    url: "jquery.com",
  },
  {
    name: "VS Code",
    category: "technology",
    classes: ["vscode"],
    url: "code.visualstudio.com",
  },
  {
    name: "X",
    category: "social media",
    classes: ["x", "x-light"],
    url: "x.com",
  },
  {
    name: "PhonePe",
    category: "financial services",
    classes: ["phonepe", "phonepe-horizontal"],
    url: "phonepe.com",
  },
  {
    name: "stripe",
    category: "financial services",
    classes: ["stripe", "stripe-wordmark"],
    url: "stripe.com",
  },
  {
    name: "Razorpay",
    category: "financial services",
    classes: ["razorpay", "razorpay-horizontal"],
    url: "razorpay.com",
  },
  {
    name: "Paypal",
    category: "financial services",
    classes: ["paypal", "paypal-horizontal"],
    url: "paypal.com",
  },
  {
    name: "paytm",
    category: "financial services",
    classes: ["paytm", "paytm-wordmark"],
    url: "paytm.com",
  },
  {
    name: "Payoneer",
    category: "financial services",
    classes: [
      "payoneer",
      "payoneer-horizontal",
      "payoneer-horizontal-light",
      "payoneer-vertical",
      "payoneer-vertical-light",
    ],
    url: "payoneer.com",
  },
  {
    name: "Visa",
    category: "financial services",
    classes: ["visa", "visa-wordmark"],
    url: "visa.com",
  },
  {
    name: "Mastercard",
    category: "financial services",
    classes: ["mastercard"],
    url: "mastercard.com",
  },
  {
    name: "buy me a coffee",
    category: "financial services",
    classes: ["buymeacoffee"],
    url: "buymeacoffee.com",
  },
  {
    name: "Domino's",
    category: "food and beverage",
    classes: ["dominos", "dominos-horizontal"],
    url: "dominos.com",
  },
  {
    name: "KFC",
    category: "food and beverage",
    classes: ["kfc", "kfc-wordmark"],
    url: "kfc.com",
  },
  {
    name: "McDonald's",
    category: "food and beverage",
    classes: ["mcdonalds"],
    url: "mcdonalds.com",
  },
  {
    name: "Burger King",
    category: "food and beverage",
    classes: ["burgerking"],
    url: "burgerking.com",
  },
  {
    name: "Nestlè",
    category: "food and beverage",
    classes: ["nestle", "nestle-vertical"],
    url: "nestle.com",
  },
  {
    name: "Wendy's",
    category: "food and beverage",
    classes: ["wendys"],
    url: "wendys.com",
  },
  {
    name: "Booking.com",
    category: "travel and tourism",
    classes: ["booking", "booking-wordmark"],
    url: "booking.com",
  },
  {
    name: "Olacabs",
    category: "travel and tourism",
    classes: ["ola", "ola-wordmark"],
    url: "olacabs.com",
  },
  {
    name: "Uber",
    category: "travel and tourism",
    classes: ["uber", "uber-wordmark"],
    url: "uber.com",
  },
  {
    name: "Virgin",
    category: "travel and tourism",
    classes: ["virgin"],
    url: "virgin.com",
  },
  {
    name: "Expedia",
    category: "travel and tourism",
    classes: ["expedia", "expedia-horizontal"],
    url: "expedia.com",
  },
  {
    name: "Hotels.com",
    category: "travel and tourism",
    classes: ["hotels", "hotels-horizontal"],
    url: "hotels.com",
  },
  {
    name: "Audi",
    category: "automobile",
    classes: ["audi", "audi-light"],
    url: "audi.com",
  },

  {
    name: "Porsche",
    category: "automobile",
    classes: ["porsche", "porsche-vertical"],
    url: "porsche.com",
  },
  {
    name: "BMW",
    category: "automobile",
    classes: ["bmw"],
    url: "bmw.com",
  },
  {
    name: "Land Rover",
    category: "automobile",
    classes: ["landrover"],
    url: "landrover.com",
  },
  {
    name: "Lamborghini",
    category: "automobile",
    classes: ["lamborghini"],
    url: "lamborghini.com",
  },
  {
    name: "Mercedes Benz",
    category: "automobile",
    classes: ["mercedes", "mercedes-vertical", "mercedes-vertical-light"],
    url: "mercedes.com",
  },
  {
    name: "Spotify",
    category: "art and music",
    classes: ["spotify", "spotify-horizontal", "spotify2-horizontal"],
    url: "spotify.com",
  },
  {
    name: "Nike",
    category: "clothing and apparel",
    classes: ["nike", "nike-light"],
    url: "nike.com",
  },
  {
    name: "Zara",
    category: "clothing and apparel",
    classes: ["zara", "zara-light", "zara-wordmark", "zara-wordmark-light"],
    url: "zara.com",
  },
  {
    name: "Puma",
    category: "clothing and apparel",
    classes: ["puma", "puma-light", "puma-horizontal", "puma-horizontal-light"],
    url: "puma.com",
  },

  {
    name: "H&M",
    category: "clothing and apparel",
    classes: ["hm"],
    url: "hm.com",
  },
  {
    name: "Balenciaga",
    category: "clothing and apparel",
    classes: ["balenciaga", "balenciaga-wordmark"],
    url: "balenciaga.com",
  },
  {
    name: "GUCCI",
    category: "clothing and apparel",
    classes: ["gucci", "gucci-light", "gucci-wordmark", "gucci-wordmark-light"],
    url: "gucci.com",
  },
  {
    name: "PRADA",
    category: "clothing and apparel",
    classes: ["prada", "prada-light", "prada-wordmark", "prada-wordmark-light"],
    url: "prada.com",
  },
  {
    name: "FENDI",
    category: "clothing and apparel",
    classes: ["fendi", "fendi-light", "fendi-wordmark", "fendi-wordmark-light"],
    url: "fendi.com",
  },
  {
    name: "Louis Vuitton",
    category: "clothing and apparel",
    classes: ["lv", "lv-light", "lv-wordmark", "lv-wordmark-light"],
    url: "louisvuitton.com",
  },
  {
    name: "Ray-Ban",
    category: "clothing and apparel",
    classes: ["rayban", "rayban-wordmark"],
    url: "rayban.com",
  },
  {
    name: "practo",
    category: "pharmaceuticals",
    classes: ["practo", "practo-wordmark"],
    url: "practo.com",
  },
  {
    name: "Instagram",
    category: "social media",
    classes: ["instagram"],
    url: "instagram.com",
  },
  {
    name: "Linkedin",
    category: "social media",
    classes: ["linkedin", "linkedin-horizontal"],
    url: "linkedin.com",
  },
  {
    name: "Gmail",
    category: "technology",
    classes: ["gmail", "gmail-horizontal"],
    url: "gmail.com",
  },
  {
    name: "Leetcode",
    category: "technology",
    classes: ["leetcode", "leetcode-light"],
    url: "leetcode.com",
  },
  {
    name: "Github",
    category: "technology",
    classes: [
      "github",
      "github-light",
      "github-wordmark",
      "github-wordmark-light",
    ],
    url: "github.com",
  },
  {
    name: "Git",
    category: "technology",
    classes: ["git", "git-horizontal"],
    url: "git.com",
  },
  {
    name: "Dribbble",
    category: "art and music",
    classes: [
      "dribbble",
      "dribbble-wordmark",
      "dribbble-wordmark-light",
      "dribbble2",
    ],
    url: "dribbble.com",
  },
  {
    name: "HSBC",
    category: "financial services",
    classes: ["hsbc", "hsbc-horizontal", "hsbc-horizontal-light"],
    url: "hsbc.com",
  },
  {
    name: "Barclays",
    category: "financial services",
    classes: ["barclays", "barclays-wordmark"],
    url: "barclays.com",
  },
  {
    name: "Adidas",
    category: "clothing and apparel",
    classes: [
      "adidas",
      "adidas-light",
      "adidas-wordmark",
      "adidas-vertical",
      "adidas-vertical-light",
    ],
    url: "adidas.com",
  },

  {
    name: "Airbnb",
    category: "travel and tourism",
    classes: ["airbnb", "airbnb-circle", "airbnb-horizontal"],
    url: "airbnb.com",
  },
  {
    name: "Tesla",
    category: "automobile",
    classes: ["tesla", "tesla-square", "tesla-wordmark"],
    url: "tesla.com",
  },
  {
    name: "Starbucks",
    category: "food and beverage",
    classes: ["starbucks", "starbucks-wordmark ci-6x"],
    url: "starbucks.com",
  },
  {
    name: "Whatsapp",
    category: "social media",
    classes: [
      "whatsapp",
      "whatsapp-horizontal",
      "whatsapp-vertical",
      "whatsapp2",
      "whatsapp2-horizontal",
      "whatsapp2-vertical",
    ],
    url: "whatsapp.com",
  },
  {
    name: "Youtube",
    category: "social media",
    classes: ["youtube", "youtube-horizontal"],
    url: "youtube.com",
  },
  {
    name: "Discord",
    category: "social media",
    classes: ["discord", "discord-horizontal"],
    url: "discord.com",
  },
  {
    name: "Facebook",
    category: "social media",
    classes: ["facebook", "facebook-wordmark"],
    url: "facebook.com",
  },
  {
    name: "Reddit",
    category: "social media",
    classes: [
      "reddit",
      "reddit-horizontal",
      "reddit-horizontal-light",
      "reddit2-horizontal-light",
    ],
    url: "reddit.com",
  },
  {
    name: "Snapchat",
    category: "social media",
    classes: ["snapchat"],
    url: "snapchat.com",
  },
  {
    name: "Twitch",
    category: "social media",
    classes: ["twitch", "twitch-wordmark"],
    url: "twitch.com",
  },
  {
    name: "Alan",
    category: "technology",
    classes: ["alan", "alan-horizontal", "alan-vertical"],
    url: "alan.com",
  },
  {
    name: "Telegram",
    category: "social media",
    classes: ["telegram", "telegram2"],
    url: "telegram.com",
  },
  {
    name: "Tiktok",
    category: "social media",
    classes: [
      "tiktok",
      "tiktok-circle",
      "tiktok-circle-light",
      "tiktok-horizontal",
      "tiktok-horizontal-light",
      "tiktok-light",
      "tiktok-rounded-square",
      "tiktok-rounded-square-light",
      "tiktok-square",
      "tiktok-square-light",
      "tiktok-vertical",
      "tiktok-vertical-light",
    ],
    url: "tiktok.com",
  },
  {
    name: "OpenSea",
    category: "technology",
    classes: [
      "opensea",
      "opensea-horizontal",
      "opensea2",
      "opensea2-horizontal",
      "opensea3",
    ],
    url: "opensea.com",
  },
  {
    name: "Johnson & Johnson",
    category: "pharmaceuticals",
    classes: ["jnj", "jnj-wordmark"],
    url: "jnj.com",
  },
  {
    name: "Novartis",
    category: "pharmaceuticals",
    classes: ["novartis", "novartis-horizontal"],
    url: "novartis.com",
  },
  {
    name: "Roche",
    category: "pharmaceuticals",
    classes: ["roche", "roche-wordmark"],
    url: "roche.com",
  },
  {
    name: "Sanofi",
    category: "pharmaceuticals",
    classes: ["sanofi", "sanofi-wordmark"],
    url: "sanofi.com",
  },
  {
    name: "Merck",
    category: "pharmaceuticals",
    classes: ["merck", "merck-horizontal"],
    url: "merck.com",
  },
  {
    name: "AstraZeneca",
    category: "pharmaceuticals",
    classes: ["astrazeneca", "astrazeneca-horizontal"],
    url: "astrazeneca.com",
  },
  {
    name: "Amazon",
    category: "technology",
    classes: ["amazon", "amazon-vertical", "amazon-vertical-light"],
    url: "amazon.com",
  },
  {
    name: "Angular",
    category: "technology",
    classes: ["angular"],
    url: "angular.com",
  },
  {
    name: "Apple",
    category: "technology",
    classes: ["apple"],
    url: "apple.com",
  },
  {
    name: "Artstation",
    category: "art and music",
    classes: [
      "artstation",
      "artstation-horizontal",
      "artstation-horizontal-light",
      "artstation-vertical",
      "artstation-vertical-light",
    ],
    url: "artstation.com",
  },
  {
    name: "aws",
    category: "technology",
    classes: ["aws", "aws-light"],
    url: "aws.com",
  },
  {
    name: "Azure",
    category: "technology",
    classes: ["azure", "azure2"],
    url: "azure.com",
  },
  {
    name: "Bandcamp",
    category: "art and music",
    classes: [
      "bandcamp",
      "bandcamp-horizontal",
      "bandcamp-horizontal-light",
      "bandcamp2-horizontal",
      "bandcamp2-horizontal-light",
    ],
    url: "bandcamp.com",
  },
  {
    name: "Behance",
    category: "art and music",
    classes: ["behance", "behance-wordmark", "behance2"],
    url: "behance.com",
  },
  {
    name: "Bootstrap",
    category: "technology",
    classes: ["bootstrap"],
    url: "bootstrap.com",
  },
  {
    name: "Cashfree",
    category: "financial services",
    classes: ["cashfree", "cashfree-horizontal", "cashfree-horizontal-light"],
    url: "cashfree.com",
  },
  {
    name: "CSS",
    category: "technology",
    classes: ["css"],
    url: "css.com",
  },
  {
    name: "Deviantart",
    category: "art and music",
    classes: ["deviantart", "deviantart-horizontal", "deviantart2"],
    url: "deviantart.com",
  },
  {
    name: "Django",
    category: "technology",
    classes: ["django", "django-wordmark"],
    url: "django.com",
  },
  {
    name: "DigitalOcean",
    category: "technology",
    classes: ["do", "do-horizontal", "do-vertical"],
    url: "digitalocean.com",
  },
  {
    name: "Docker",
    category: "technology",
    classes: ["docker", "docker-horizontal", "docker-vertical"],
    url: "docker.com",
  },
  {
    name: "Eth",
    category: "technology",
    classes: ["eth"],
    url: "eth.com",
  },
  {
    name: "Figma",
    category: "technology",
    classes: ["figma"],
    url: "figma.com",
  },
  {
    name: "Firebase",
    category: "technology",
    classes: ["firebase"],
    url: "firebase.com",
  },
  {
    name: "Flutter",
    category: "technology",
    classes: ["flutter"],
    url: "flutter.com",
  },
  {
    name: "Framer",
    category: "technology",
    classes: ["framer-motion"],
    url: "framer.com",
  },
  {
    name: "Gcd",
    category: "technology",
    classes: ["gcd"],
    url: "gcd.com",
  },
  {
    name: "Google",
    category: "technology",
    classes: ["google", "google-wordmark"],
    url: "google.com",
  },
  {
    name: "Graphql",
    category: "technology",
    classes: ["graphql", "graphql-horizontal", "graphql-vertical"],
    url: "graphql.com",
  },
  {
    name: "Swift",
    category: "technology",
    classes: ["swift", "swift-horizontal"],
    url: "swift.org",
  },
  {
    name: "Ruby",
    category: "technology",
    classes: ["ruby"],
    url: "ruby-lang.org",
  },
  {
    name: "Scala",
    category: "technology",
    classes: ["scala", "scala-horizontal"],
    url: "scala-lang.org",
  },
  {
    name: "HTML5",
    category: "technology",
    classes: ["html"],
    url: "html.com",
  },
  {
    name: "Infura",
    category: "technology",
    classes: ["infura", "infura-vertical", "infura-wordmark"],
    url: "infura.com",
  },
  {
    name: "Java",
    category: "technology",
    classes: ["java", "java-vertical"],
    url: "java.com",
  },
  {
    name: "C",
    category: "technology",
    classes: ["c"],
    url: "learn-c.org",
  },
  {
    name: "C++",
    category: "technology",
    classes: ["cpp"],
    url: "isocpp.org",
  },
  {
    name: "C#",
    category: "technology",
    classes: ["csharp"],
    url: "csharp.com",
  },
  {
    name: "Julia",
    category: "technology",
    classes: ["julia", "julia-wordmark"],
    url: "julialang.org",
  },
  {
    name: "Go",
    category: "technology",
    classes: ["go", "go-wordmark"],
    url: "golang.org",
  },
  {
    name: "PHP",
    category: "technology",
    classes: ["php", "php-wordmark", "php-wordmark-light"],
    url: "php.net",
  },
  {
    name: "Kotlin",
    category: "technology",
    classes: ["kotlin", "kotlin-wordmark"],
    url: "kotlinlang.org",
  },
  {
    name: "Rust",
    category: "technology",
    classes: ["rust"],
    url: "rust-lang.org",
  },
  {
    name: "R",
    category: "technology",
    classes: ["r"],
    url: "r-project.org",
  },
  {
    name: "Perl",
    category: "technology",
    classes: ["perl"],
    url: "perl.org",
  },
  {
    name: "JavaScript",
    category: "technology",
    classes: ["js"],
    url: "javascript.com",
  },
  {
    name: "Kubernetes",
    category: "technology",
    classes: ["kubernetes", "kubernetes-horizontal", "kubernetes-vertical"],
    url: "kubernetes.com",
  },
  {
    name: "Laravel",
    category: "technology",
    classes: ["laravel"],
    url: "laravel.com",
  },
  {
    name: "Meta",
    category: "technology",
    classes: ["meta", "meta-horizontal", "meta-horizontal-light"],
    url: "meta.com",
  },
  {
    name: "Metamask",
    category: "technology",
    classes: ["metamask", "metamask-horizontal", "metamask-vertical"],
    url: "metamask.com",
  },
  {
    name: "Microsoft",
    category: "technology",
    classes: [
      "microsoft",
      "microsoft-horizontal",
      "microsoft-horizontal-light",
    ],
    url: "microsoft.com",
  },
  {
    name: "365",
    category: "technology",
    classes: ["365"],
    url: "office.com",
  },
  {
    name: "Access",
    category: "technology",
    classes: ["access"],
    url: "office.com",
  },
  {
    name: "Delve",
    category: "technology",
    classes: ["delve"],
    url: "office.com",
  },
  {
    name: "Excel",
    category: "technology",
    classes: ["excel"],
    url: "office.com",
  },
  {
    name: "Forms",
    category: "technology",
    classes: ["forms"],
    url: "office.com",
  },
  {
    name: "OneDrive",
    category: "technology",
    classes: ["onedrive"],
    url: "office.com",
  },
  {
    name: "OneNote",
    category: "technology",
    classes: ["onenote"],
    url: "office.com",
  },
  {
    name: "PowerPoint",
    category: "technology",
    classes: ["powerpoint"],
    url: "office.com",
  },
  {
    name: "Project",
    category: "technology",
    classes: ["project"],
    url: "office.com",
  },
  {
    name: "SharePoint",
    category: "technology",
    classes: ["sharepoint"],
    url: "office.com",
  },
  {
    name: "Sway",
    category: "technology",
    classes: ["sway"],
    url: "office.com",
  },
  {
    name: "Teams",
    category: "technology",
    classes: ["teams"],
    url: "office.com",
  },
  {
    name: "Visio",
    category: "technology",
    classes: ["visio"],
    url: "office.com",
  },
  {
    name: "Word",
    category: "technology",
    classes: ["word"],
    url: "office.com",
  },
  {
    name: "Mixcloud",
    category: "art and music",
    classes: [
      "mixcloud",
      "mixcloud-light",
      "mixcloud-wordmark",
      "mixcloud-wordmark-light",
      "mixcloud2",
      "mixcloud2-wordmark",
      "mixcloud3",
      "mixcloud3-wordmark",
    ],
    url: "mixcloud.com",
  },
  {
    name: "MongoDB",
    category: "technology",
    classes: [
      "mongodb",
      "mongodb-horizontal",
      "mongodb2",
      "mongodb2-horizontal",
    ],
    url: "mongodb.com",
  },
  {
    name: "MUI",
    category: "technology",
    classes: ["mui"],
    url: "mui.com",
  },
  {
    name: "MySQL",
    category: "technology",
    classes: ["mysql", "mysql-vertical"],
    url: "mysql.com",
  },
  {
    name: "Pfizer",
    category: "pharmaceuticals",
    classes: ["pfizer", "pfizer-wordmark"],
    url: "pfizer.com",
  },
  {
    name: "Netflix",
    category: "technology",
    classes: ["netflix", "netflix-wordmark"],
    url: "netflix.com",
  },
  {
    name: "Netlify",
    category: "technology",
    classes: [
      "netlify",
      "netlify-light",
      "netlify-wordmark",
      "netlify-wordmark-light",
    ],
    url: "netlify.com",
  },
  {
    name: "Nextjs",
    category: "technology",
    classes: [
      "nextjs",
      "nextjs-horizontal",
      "nextjs-horizontal-light",
      "nextjs-light",
    ],
    url: "nextjs.com",
  },
  {
    name: "Nodejs",
    category: "technology",
    classes: [
      "nodejs",
      "nodejs-horizontal",
      "nodejs-horizontal-light",
      "nodejs-vertical-dark",
      "nodejs-vertical-light",
    ],
    url: "nodejs.com",
  },
  {
    name: "npm",
    category: "technology",
    classes: ["npm", "npm-wordmark"],
    url: "npm.com",
  },
  {
    name: "Nuxtjs",
    category: "technology",
    classes: ["nuxtjs", "nuxtjs-horizontal", "nuxtjs-horizontal-light"],
    url: "nuxtjs.com",
  },
  {
    name: "Pinia",
    category: "technology",
    classes: ["pinia"],
    url: "pinia.com",
  },
  {
    name: "Pinterest",
    category: "art and music",
    classes: ["pinterest", "pinterest-horizontal"],
    url: "pinterest.com",
  },
  {
    name: "Pluto",
    category: "art and music",
    classes: ["pluto"],
    url: "pluto.website",
  },
  {
    name: "Polygon",
    category: "technology",
    classes: ["polygon-io", "polygon-io-vertical", "polygon-io-wordmark"],
    url: "polygon.com",
  },
  {
    name: "Postgresql",
    category: "technology",
    classes: ["postgresql"],
    url: "postgresql.com",
  },
  {
    name: "Python",
    category: "technology",
    classes: [
      "python",
      "python-horizontal",
      "python-powered",
      "python2-powered",
    ],
    url: "python.com",
  },
  {
    name: "Pytorch",
    category: "technology",
    classes: ["pytorch", "pytorch-horizontal"],
    url: "pytorch.com",
  },
  {
    name: "Railway",
    category: "technology",
    classes: [
      "railway",
      "railway-horizontal",
      "railway-horizontal-light",
      "railway-light",
    ],
    url: "railway.app",
  },
  {
    name: "React Native",
    category: "technology",
    classes: ["react-native"],
    url: "reactnative.dev",
  },
  {
    name: "Reactjs",
    category: "technology",
    classes: ["reactjs"],
    url: "react.dev",
  },

  {
    name: "Redis",
    category: "technology",
    classes: [
      "redis",
      "redis-enterprise",
      "redis-horizontal",
      "redis-horizontal-light",
    ],
    url: "redis.com",
  },
  {
    name: "Redux",
    category: "technology",
    classes: ["redux"],
    url: "redux.com",
  },
  {
    name: "Sanity",
    category: "technology",
    classes: ["sanity", "sanity-wordmark"],
    url: "sanity.com",
  },
  {
    name: "Sass",
    category: "technology",
    classes: ["sass", "sass-wordmark"],
    url: "sass.com",
  },
  {
    name: "Solidity",
    category: "technology",
    classes: ["solidity"],
    url: "solidity.com",
  },
  {
    name: "Soundcloud",
    category: "art and music",
    classes: ["soundcloud", "soundcloud-horizontal"],
    url: "soundcloud.com",
  },
  {
    name: "Spring",
    category: "technology",
    classes: ["spring"],
    url: "spring.com",
  },
  {
    name: "Supabase",
    category: "technology",
    classes: ["supabase", "supabase-horizontal", "supabase-horizontal-light"],
    url: "supabase.com",
  },
  {
    name: "Svelte",
    category: "technology",
    classes: ["svelte", "svelte-horizontal"],
    url: "svelte.com",
  },
  {
    name: "Tailwind",
    category: "technology",
    classes: ["tailwind", "tailwind-horizontal", "tailwind-horizontal-light"],
    url: "tailwind.com",
  },
  {
    name: "Tmdb",
    category: "technology",
    classes: ["tmdb"],
    url: "tmdb.com",
  },

  {
    name: "Twitter",
    category: "social media",
    classes: [
      "twitter",
      "twitter-circle",
      "twitter-rounded-square",
      "twitter-square",
    ],
    url: "twitter.com",
  },
  {
    name: "TypeScript",
    category: "technology",
    classes: ["ts", "ts-circle", "ts-wordmark"],
    url: "typescriptlang.org",
  },
  {
    name: "Vercel",
    category: "technology",
    classes: [
      "vercel",
      "vercel-horizontal",
      "vercel-horizontal-light",
      "vercel-light",
    ],
    url: "vercel.com",
  },
  {
    name: "Vimeo",
    category: "technology",
    classes: ["vimeo", "vimeo-wordmark", "vimeo2"],
    url: "vimeo.com",
  },
  {
    name: "Vuejs",
    category: "technology",
    classes: ["vuejs"],
    url: "vuejs.com",
  },
  {
    name: "Web3Js",
    category: "technology",
    classes: ["web3js"],
    url: "web3js.com",
  },
  {
    name: "Ringcentral",
    category: "technology",
    classes: ["ringcentral"],
    url: "ringcentral.com",
  },
  {
    name: "Letterboxd",
    category: "social-media",
    classes: [
      "letterboxd",
      "letterboxd-light",
      "letterboxd-horizontal",
      "letterboxd-vertical",
      "letterboxd-vertical-light",
      "letterboxd-horizontal-light",
    ],
    url: "letterboxd.com",
  },
  {
    name: "Codeforces",
    category: "technology",
    classes: ["codeforces"],
    url: "codeforces.com",
  },
  {
    name: "Dropbox",
    category: "technology",
    classes: ["dropbox", "dropbox-horizontal", "dropbox-horizontal-light"],
    url: "dropbox.com",
  },
];
export default icons;
