---
title: Get started
template: page
---

# Get started

Explain how to use this library.

----

## Requirements

Required Arduino IDE installed, Arduino UNO board and a NRF24 compatible module (link to the modules/setup page).

----

## Hardware setup

Describe how to hard-wire the module to the arduino UNO. Warn about the power supply voltage: MUST BE 3.3V  

Image indicating connections between the Arduino board and the module.

![](https://microcontrollerelectronics.com/wp-content/uploads/2015/10/nRF24L01_Wiring.png)

I you are not using one of [these]() development kits.

----

## Library installation

There are various options to install the library:

- **Manual option:** Download from Github release section or git clone using tag version.
- **Arduino library manager:** Download and install using the Arduino IDE library manager.
- **Make install:** For advanced users. Generate build folder using cmake and make install. link to the Cmake build page.

----

## Kickstart example
 
Very simple kickstart example:

```
#include "header file"
```


```
Create Radio object
```

If you are still interested in using this library, don't forget to check this [complete examples list]().