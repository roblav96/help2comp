export = `
Sloc, Cloc and Code. Count lines of code in a directory with complexity estimation.
Version 2.13.0
Ben Boyter <ben@boyter.org> + Contributors

Usage:
  scc [flags]

Flags:
      --avg-wage int                average wage value used for basic COCOMO calculation (default 56286)
      --binary                      disable binary file detection
      --by-file                     display output for every file
      --ci                          enable CI output settings where stdout is ASCII
      --count-as string             count extension as language [e.g. jsp:htm,chead:"C Header" maps extension jsp to html and chead to C Header]
      --debug                       enable debug output
      --exclude-dir strings         directories to exclude (default [.git,.hg,.svn])
      --file-gc-count int           number of files to parse before turning the GC on (default 10000)
  -f, --format string               set output format [tabular, wide, json, csv, cloc-yaml, html, html-table] (default "tabular")
      --format-multi string         have multiple format output overriding --format [e.g. tabular:stdout,csv:file.csv,json:file.json]
      --gen                         identify generated files
      --generated-markers strings   string markers in head of generated files (default [do not edit])
  -h, --help                        help for scc
  -i, --include-ext strings         limit to file extensions [comma separated list: e.g. go,java,js]
      --include-symlinks            if set will count symlink files
  -l, --languages                   print supported languages and extensions
      --large-byte-count int        number of bytes a file can contain before being removed from output (default 1000000)
      --large-line-count int        number of lines a file can contain before being removed from output (default 40000)
      --min                         identify minified files
  -z, --min-gen                     identify minified or generated files
      --min-gen-line-length int     number of bytes per average line for file to be considered minified or generated (default 255)
      --no-cocomo                   remove COCOMO calculation output
  -c, --no-complexity               skip calculation of code complexity
  -d, --no-duplicates               remove duplicate files from stats and output
      --no-gen                      ignore generated files in output (implies --gen)
      --no-gitignore                disables .gitignore file logic
      --no-ignore                   disables .ignore file logic
      --no-large                    ignore files over certain byte and line size set by max-line-count and max-byte-count
      --no-min                      ignore minified files in output (implies --min)
      --no-min-gen                  ignore minified or generated files in output (implies --min-gen)
      --no-size                     remove size calculation output
  -M, --not-match stringArray       ignore files and directories matching regular expression
  -o, --output string               output filename (default stdout)
      --remap-all string            inspect every file and remap by checking for a string and remapping the language [e.g. "-*- C++ -*-":"C Header"]
      --remap-unknown string        inspect files of unknown type and remap by checking for a string and remapping the language [e.g. "-*- C++ -*-":"C Header"]
      --size-unit string            set size unit [si, binary, mixed, xkcd-kb, xkcd-kelly, xkcd-imaginary, xkcd-intel, xkcd-drive, xkcd-bakers] (default "si")
  -s, --sort string                 column to sort by [files, name, lines, blanks, code, comments, complexity] (default "files")
  -t, --trace                       enable trace output (not recommended when processing multiple files)
  -v, --verbose                     verbose output
      --version                     version for scc
  -w, --wide                        wider output with additional statistics (implies --complexity)
`
