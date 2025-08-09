# Custom versions list source
NostalgiaLauncher allows you to use a custom source for the list of Minecraft PE Alpha versions. It should be a JSON file that matches the structure shown below:
```
[
  {
    "name": "0.6.0",
    "url": "https://archive.org/download/MCPEAlpha/PE-a0.6.0-x86.apk"
  },
  {
    "name": "0.6.1",
    "url": "https://archive.org/download/MCPEAlpha/PE-a0.6.1-x86.apk"
  },
  {
    "name": "0.7.0",
    "url": "https://archive.org/download/MCPEAlpha/PE-a0.7.0-x86.apk"
  }
]
```
where:<br>
`name`: The display name of the version in the launcher<br>
`url`: The direct download URL for the APK file

## How to use a custom source
To use a custom source in NostalgiaLauncher, follow these steps:

1. Go to the launcher settings
2. Uncheck the "Use default URL" box
3. Select the source type (URL or File).
4. Enter the URL or select a JSON file (depending on what you chose)
5. Click Save