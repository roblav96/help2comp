export = `
Usage:  [1mtrans[22m [[4mOPTIONS[24m] [[4mSOURCES[24m]:[[4mTARGETS[24m] [[4mTEXT[24m]...

Information options:
    [1m-V[22m, [1m-version[22m
        Print version and exit.
    [1m-H[22m, [1m-help[22m
        Print help message and exit.
    [1m-M[22m, [1m-man[22m
        Show man page and exit.
    [1m-T[22m, [1m-reference[22m
        Print reference table of languages and exit.
    [1m-R[22m, [1m-reference-english[22m
        Print reference table of languages (in English names) and exit.
    [1m-L [22m[4mCODES[24m, [1m-list [22m[4mCODES[24m
        Print details of languages and exit.
    [1m-S[22m, [1m-list-engines[22m
        List available translation engines and exit.
    [1m-U[22m, [1m-upgrade[22m
        Check for upgrade of this program.

Translator options:
    [1m-e [22m[4mENGINE[24m, [1m-engine [22m[4mENGINE[24m
        Specify the translation engine to use.

Display options:
    [1m-verbose[22m
        Verbose mode. (default)
    [1m-b[22m, [1m-brief[22m
        Brief mode.
    [1m-d[22m, [1m-dictionary[22m
        Dictionary mode.
    [1m-identify[22m
        Language identification.
    [1m-show-original [22m[4mY/n[24m
        Show original text or not.
    [1m-show-original-phonetics [22m[4mY/n[24m
        Show phonetic notation of original text or not.
    [1m-show-translation [22m[4mY/n[24m
        Show translation or not.
    [1m-show-translation-phonetics [22m[4mY/n[24m
        Show phonetic notation of translation or not.
    [1m-show-prompt-message [22m[4mY/n[24m
        Show prompt message or not.
    [1m-show-languages [22m[4mY/n[24m
        Show source and target languages or not.
    [1m-show-original-dictionary [22m[4my/N[24m
        Show dictionary entry of original text or not.
    [1m-show-dictionary [22m[4mY/n[24m
        Show dictionary entry of translation or not.
    [1m-show-alternatives [22m[4mY/n[24m
        Show alternative translations or not.
    [1m-w [22m[4mNUM[24m, [1m-width [22m[4mNUM[24m
        Specify the screen width for padding.
    [1m-indent [22m[4mNUM[24m
        Specify the size of indent (number of spaces).
    [1m-theme [22m[4mFILENAME[24m
        Specify the theme to use.
    [1m-no-theme[22m
        Do not use any other theme than default.
    [1m-no-ansi[22m
        Do not use ANSI escape codes.
    [1m-no-autocorrect[22m
        Do not autocorrect. (if defaulted by the translation engine)
    [1m-no-bidi[22m
        Do not convert bidirectional texts.
    [1m-bidi[22m
        Always convert bidirectional texts.
    [1m-no-warn[22m
        Do not write warning messages to stderr.
    [1m-dump[22m
        Print raw API response instead.

Audio options:
    [1m-p, -play[22m
        Listen to the translation.
    [1m-speak[22m
        Listen to the original text.
    [1m-n [22m[4mVOICE[24m, [1m-narrator [22m[4mVOICE[24m
        Specify the narrator, and listen to the translation.
    [1m-player [22m[4mPROGRAM[24m
        Specify the audio player to use, and listen to the translation.
    [1m-no-play[22m
        Do not listen to the translation.
    [1m-no-translate[22m
        Do not translate anything when using -speak.
    [1m-download-audio[22m
        Download the audio to the current directory.
    [1m-download-audio-as [22m[4mFILENAME[24m
        Download the audio to the specified file.

Terminal paging and browsing options:
    [1m-v[22m, [1m-view[22m
        View the translation in a terminal pager.
    [1m-pager [22m[4mPROGRAM[24m
        Specify the terminal pager to use, and view the translation.
    [1m-no-view[22m, [1m-no-pager[22m
        Do not view the translation in a terminal pager.
    [1m-browser [22m[4mPROGRAM[24m
        Specify the web browser to use.
    [1m-no-browser[22m
        Do not open the web browser.

Networking options:
    [1m-x [22m[4mHOST:PORT[24m, [1m-proxy [22m[4mHOST:PORT[24m
        Use HTTP proxy on given port.
    [1m-u [22m[4mSTRING[24m, [1m-user-agent [22m[4mSTRING[24m
        Specify the User-Agent to identify as.
    [1m-4[22m, [1m-ipv4[22m, [1m-inet4-only[22m
        Connect only to IPv4 addresses.
    [1m-6[22m, [1m-ipv6[22m, [1m-inet6-only[22m
        Connect only to IPv6 addresses.

Interactive shell options:
    [1m-I[22m, [1m-interactive[22m, [1m-shell[22m
        Start an interactive shell.
    [1m-E[22m, [1m-emacs[22m
        Start the GNU Emacs front-end for an interactive shell.
    [1m-no-rlwrap[22m
        Do not invoke rlwrap when starting an interactive shell.

I/O options:
    [1m-i [22m[4mFILENAME[24m, [1m-input [22m[4mFILENAME[24m
        Specify the input file.
    [1m-o [22m[4mFILENAME[24m, [1m-output [22m[4mFILENAME[24m
        Specify the output file.

Language preference options:
    [1m-l [22m[4mCODE[24m, [1m-hl [22m[4mCODE[24m, [1m-lang [22m[4mCODE[24m
        Specify your home language.
    [1m-s [22m[4mCODES[24m, [1m-sl [22m[4mCODES[24m, [1m-source [22m[4mCODES[24m, [1m-from [22m[4mCODES[24m
        Specify the source language(s), joined by '+'.
    [1m-t [22m[4mCODES[24m, [1m-tl [22m[4mCODES[24m, [1m-target [22m[4mCODES[24m, [1m-to [22m[4mCODES[24m
        Specify the target language(s), joined by '+'.

Text preprocessing options:
    [1m-j[22m, [1m-join-sentence[22m
        Treat all arguments as one single sentence.

Other options:
    [1m-no-init[22m
        Do not load any initialization script.

See the man page trans(1) for more information.
`
