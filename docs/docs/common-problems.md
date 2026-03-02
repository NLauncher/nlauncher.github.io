# Common problems and their solutions

## Failed to launch game: Cannot run program "/path/to/executable/" (in directory "game"): error=2, No such file or directory
If you encounter this error, try compiling Ninecraft on your device and **[using it as the executable file](custom-executable-for-versions)**.
Compilation instructions for Ninecraft: **[https://github.com/MCPI-Revival/Ninecraft?tab=readme-ov-file](https://github.com/MCPI-Revival/Ninecraft?tab=readme-ov-file)**

## Failed to launch game: game\libstdc++-6.dll *(or some other dll)* (The system cannot find the path specified)
Make sure the launcher has all the necessary permissions.

## Failed to launch game: java.lang.Exception: error.executableNotFound: *userpath*/*nlauncher_path*/game/ninecraft.exe
This error occurs because the Ninecraft executable file (ninecraft.exe or just ninecraft) is missing in the **game** folder. To fix this, download it manually from **[https://github.com/NLauncher/components/raw/refs/heads/main/ninecraft-linux.zip](https://github.com/NLauncher/components/raw/refs/heads/main/ninecraft-linux.zip)** (for Linux) or **[https://github.com/NLauncher/components/raw/refs/heads/main/ninecraft-windows.zip](https://github.com/NLauncher/components/raw/refs/heads/main/ninecraft-windows.zip)** (for Windows) and select this file as the **[custom executable](custom-executable-for-versions.md)** in the launcher settings.

## Failed to launch game: java.lang.Exception: error.launchGameFailed:Cannot run program "/path/to/executable" (in directory "game"): CreateProcess error=193, %1 is not a valid Win32 application
This error occurs because you selected the ZIP archive as the executable file for launching versions, instead of the actual executable file inside it (ninecraft.exe or just ninecraft)

## The game window closes immediately
1. Make sure you're using the x86 version of the game, no higher than 0.11.1-2
2. Make sure Ninecraft supports your system. Try compiling it manually and running it. [https://github.com/MCPI-Revival/Ninecraft?tab=readme-ov-file#ninecraft](https://github.com/MCPI-Revival/Ninecraft?tab=readme-ov-file#ninecraft)
3. Try compiling Ninecraft manually and selecting the executable file in the launcher settings

## Broken textures
The launcher has an option to reset textures to the default ones. To do this, go to the **Textures** tab, select the version with broken textures, and click “Restore Default Textures.”
