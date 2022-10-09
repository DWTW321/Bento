// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'DWTW',
	openInNewTab: true,
	twelveHourFormat: true,

	// Theme
	theme: 'latte-mocha',
	imageBackground: false,
	
	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'dc6b5c3fad2bdaf6c9011a6e44a5bf1d', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.63333',
	defaultLongitude: '-1.13333',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://outlook.com/',
		},
		{
			id: '3',
			name: 'Piped',
			icon: 'youtube',
			link: 'https://piped.kavin.rocks/',
		},
		{
			id: '4',
			name: 'Movies',
			icon: 'film',
			link: 'https://sflix.pro/',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://libreddit.kavin.rocks/',
		},
		{
			id: '6',
			name: 'Horror News',
			icon: 'clapperboard',
			link: 'https://bloody-disgusting.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://nitter.kavin.rocks/',
		},
		{
			id: '3',
			name: 'CodeAcademy',
			icon: 'code',
			link: 'https://www.codecademy.com/',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.co.uk/',
		},
		{
			id: '5',
			name: 'Gaming News',
			icon: 'gamepad',
			link: 'https://www.rockpapershotgun.com/',
		},
		{
			id: '6',
			name: 'Heroku',
			icon: 'webhook',
			link: 'https://dashboard.heroku.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'grime',
					link: 'https://piped.kavin.rocks/playlist?list=PLYU-_TwC_ARfyAqUe29JcVx5Voo-V9GZm',
				},
				{
					name: 'drill',
					link: 'https://piped.kavin.rocks/playlist?list=PLY0AMVYms6p_m3tiZ_p-LFybejr8_GWAH',
				},
				{
					name: 'black metal',
					link: 'https://piped.kavin.rocks/playlist?list=PLykNNMVjCDfWTLQqFMFHLNdNMWXEzfCRt',
				},
				{
					name: 'chill',
					link: 'https://piped.kavin.rocks/playlist?list=PLuDoiEqVUgegWFXgllgj1pL3JkeVfKA4m',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'bloody disgusting',
					link: 'https://bloody-disgusting.com/',
				},
				{
					name: 'grimoire of horror',
					link: 'https://www.grimoireofhorror.com/',
				},
				{
					name: 'rock, paper, shotgun',
					link: 'https://www.rockpapershotgun.com/',
				},
				{
					name: 'awesome viewer',
					link: 'https://awesome.digitalbunker.dev/awesome/JStumpp/awesome-android',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};