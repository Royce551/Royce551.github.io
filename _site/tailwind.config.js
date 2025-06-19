module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
        './FRESHMusicPlayer/*.html'
    ],
    theme: {
        colors: {
            'primarytext': '#000000',
            'secondarytext': '#525252',
            'foreground': '#E9EAED',
            'secondary': '#F4F4F6',
            'background': '#FFFFFF',
            'control': '#E0E0E0',
            'blue': '#338BC1',
            'darkblue': '#13293D',
            'green': '#69B578',
            'red': '#d5463f',
            'dark-primarytext': '#FFFFFF',
            'dark-secondarytext': '#DADADA',
            'dark-foreground': '#22252A',
            'dark-secondary': '#16191D',
            'dark-background': '#0B0D0E',
            'dark-control': '#686F73',
        },
        fontFamily: {
            sans: ['Source Sans 3', 'sans-serif'],
        },
        fontSize: {
            sm: '12px',
            base: '15px',
            bigger: '19px',
            md: '24px',
            'xl': '32px',
            '2xl': '48px',
        },
        extend: {
            fontFamily: {
                sourcesans: ['"Source Sans 3"']
            }
        }
    },

    plugins: []
}