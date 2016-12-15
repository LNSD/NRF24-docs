---
title: Advanced
template: page
---

# Build using CMake

Arduino is a great development platform, since it is very easy to use. It has everything a beginner should need. The Arduino IDE simplifies a lot of things for the standard user, but if you are an advanced or a professional programmer the IDE can feel simplistic and restrictive.
``
CMake is great cross-platform build system that works on practically any operating system. With it you are not constrained to a single build system. CMake lets you generate the build system that fits your needs, using the tools you like. It can generate any type of build system, from simple Makefiles, to complete projects for Eclipse, Visual Studio, XCode, etc.

The [Arduino CMake](https://github.com/queezythegreat/arduino-cmake) build system integrates tightly with the Arduino SDK. It also has other great features:

  - Integrates with _Arduino SDK_.
  - Supports all Arduino boards.
  - Supports Arduino type libraries.
  - Automatic detection of Arduino libraries.
  - Generates firmware images.
  - Generates libraries.
  - Sketch support.
  - Upload support.
  - Hardware Platform support.
  - Programmer support (with bootloader upload).
  - Supports multiple build system types (Makefiles, Eclipse, XCode, KDevelop, etc).
  - Cross-platform: Windows, Linux, macOS.
  - Extensible build system, thanks to CMake.

----

## Requirements

There are two basic requirements to use the Arduino CMake build system: 

  - `CMake` - http://www.cmake.org/cmake/resources/software.html
  - `Arduino SDK` - http://www.arduino.cc/en/Main/Software
  
Arduino SDK must be installed in the default location. Arduino CMake will look for the SDK in the following locations:
 
 - **macOS:** `/Applications/Arduino.app/`
 - **Linux:** `/usr/share/arduino*`, `/opt/local/arduino*`, `/opt/arduino*` or `/usr/local/share/arduino*`
 - **Windows:** `C:\Program Files\Arduino` or `C:\Program Files (x86)\Arduino"`
 
> **Note:** Arduino CMake is not compatible with Cygwing file system

----

## Build with Make

The Make scripts can be generated manually or using the provided `configure` script.  

### Generate using `configure` script and build

1. This is the easiest way. Just execute the `configure` script in your command line:
 
 ```bash
 $ ./configure
 ```
 
2. This will generate the build system into `build` dir. To build the project just execute the `make` command.
 
  ```bash
  $ cd build
  $ make
  ```
### Generate manually and build
 
1. To generate manually the Make files, first create the `build` directory. 
  
  ```bash
  $ mkdir build
  $ cd build
  ```
  
2. Then execute CMake to create the build system:

  ```bash
  $ cmake ..
  ```

  To specify the build system type, use the -G option, for example:

  ```bash
  $ cmake -G"Eclipse CDT4 - Unix Makefiles" ..
  ```

  If you rather use a GUI, use:

  ```bash
  $ cmake-gui ..
  ```

  
3. Then, to build the project just execute the `make` command.
 
  ```bash
  $ make
  ```

----

## Upload firmware (using CMake)

Once everything built correctly we can upload the built firmware to the Arduino board. Depending on your Arduino you will have to update the serial port used for uploading the firmware.

To change the port please edit the following variable in CMakeLists.txt:
  ```CMake
  set(${FIRMWARE_NAME}_PORT /path/to/device)
  ```
  
To upload all the generated firmware images run the Make global `upload` target (this will depend on all other upload targets defined in the build):

  ```bash
  $ make upload
  ```
  
or to upload a concrete target, run its corresponding `upload` target:

  ```bash
  $ make ${TARGET_NAME}-upload
  ```
  
where `TARGET_NAME` is the sub-project name (e.g. for `bsp` example ⇒ `bsp-upload`) 

If you have an upload sync error then try resetting/power cycling the board before starting the upload process.

----

## Clion integration

Development using Arduino CMake and Clion