---
title: Home
template: index
---

<p class="text-center"><i class="fa fa-cube header-icon"></i></p>

## NRF24 Library

This is an Arduino-based driver library for the nRF24L01 modules. This library has the goal of being a high level library for the Nordic Semiconductor transceiver chip [nRF24L01](https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRF24L01), and its improved version [nRF24L01+](https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRF24L01P).

![](https://i0.wp.com/farm7.static.flickr.com/6120/6307668499_60a7325e9d.jpg)

Heavily inpired by [maniacbug's RF24 Arduino library](https://github.com/maniacbug/RF24) and [TMRh20's RF24 fork](https://github.com/TMRh20/RF24), this library has been rewritten from scratch with the goal of simplify as much as possible the usage of this transceiver modules and be as flexible as possible. Simplicity is achieved thanks to the layered architectural design of this library and flexibility is achieved thanks the high level driver classes.

----

<p class="text-center"><i class="fa fa-microchip header-icon"></i></p>

## NRF24L01P

As Nordic Semiconductor says in the [nRF24L01's product page](http://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRF24L01P):

> The Nordic nRF24L01 is a highly integrated, ultra low power (ULP) 2Mbps RF transceiver IC for the 2.4GHz ISM (Industrial, Scientific and Medical) band.

### Features

Theese are the main features of this transceiver IC:

- Low cost, single-chip 2.4GHz GFSK RF transceiver IC
    + Worldwide license-free 2.4GHz ISM band operation
    + GFSK modulation, 1 or 2MHz bandwidth
    + 0, -6, -12, and -18dBm programmable TX output power
- 250kbps, 1Mbps and 2Mbps on-air data-rate options
- Ultra low power consumption – months to years of battery lifetime
- On chip voltage regulator. 1.9 to 3.6V supply range
- 5V tolerant inputs
- MCU Interface via SPI, up to 10Mbps
- Enhanced ShockBurst&trade; hardware protocol accelerator
    + Automatic packet assembly (Preamble, Address, CRC)
    + Automatic packed detection and validation
    + Dynamic payload length, 1 to 32Bytes
    + Auto retransmit
    + Auto Acknowledgment with optional payload
    + 6 data pipe MultiCeiver&trade;
    + 3 separate 32Bytes TX and RX FIFOs

It is sold in very inexpensive wireless modules. This modules have a simple 6-pin digital connection, including a 4-wire SPI interface, an interrupt pin and a dedicated transmit/receive enable pin. Since nRF24L01+ has 5V tolerant inputs it can be easily powered and interfaced with the Arduino boards. 

This modules can easily be obtained via eBay and many other places for prices as low as $2. [Here](http://localhost:8080/hardware.html#modules) you can find a list of tested NRF24 library compatible modules.

----

<p class="text-center"><i class="fa fa-bars header-icon"></i></p>

## NRF24 stack

This library has been written with the goal of simplify as much as possible the usage of nRF24 transceiver modules and provide the developer flexibility and simplicity. Simplicity is achieved thanks to the NRF24 library stack. Flexibility is achieved thanks the high level driver classes.

The following figure shows the architectural block diagram of the NRF24 library stack. The stack consists of three main layers:

- The Class Layer
- The NRF24 Core Layer
- The Device Controller Driver Layer

The bottom-most layer is Device Controller Driver (DCD) layer which is also referred as SPI driver layer in this documentation. Above that is the NRF24 Core Layer which handles the hardware configuration in a more friendly way. Above that is the Class layer which contains various class Function Drivers (FD). Finally, the application sits at the top of the stack. 

![NRF24 Stack Overview](http://docs.lpcware.com/usbromlib/v1.0/arch.png)

- **Class layer:** This higher layer of the NRF24 library stack is the responsible of providing flexibility to the application development. All the function drivers implemented by the NRF24 library stack reside in this layer. NRF24 provides different function drivers that perform typical operations and play different roles. This function drivers provide a much simpler API to the application. This layer can be extended using custom function drivers. 

- **NRF24 Core layer:** This is an intermediate layer of the NRF24 library stack. This layer provides a intermediate abstraction API to the nRF24L01. Enables the developer configure the device using a human-friendly API.
   
- **Device Controller Driver layer:** This is the base layer of the NRF24 library stack. This layer provides a very low level API. It implements the routines to deal directly with the nRF24L01 hardware.

----

<p class="text-center"><i class="fa fa-sitemap header-icon"></i></p>

## Continue reading


### Get started

- <dt>[Get started](/get-started)</dt>
    <dd>
        Minimum requirements to get started using this library.
    </dd>
- <dt>[Hardware setup](/get-started#hardware-setup)</dt>
    <dd>
        Basic hardware wiring setup to get started using this library.
    </dd>
- <dt>[Library installation](/get-started#library-installation)</dt>
    <dd>
        NRF24 arduino library installation process.
    </dd>
- <dt>[Library examples](/examples)</dt>
    <dd>
        A complete collection of examples.
    </dd>


### NRF24

- <dt>[Stack overview](/library-stack)</dt> 
    <dd> 
        Brief NRF24 Stack overview.
    </dd> 
- <dt>[Device Controller Driver layer](/library-stack#device-controller-driver-layer)</dt>
    <dd>
        The bottom-most layer is Device Controller Driver (DCD) layer implements the routines to deal directly with the nRF24L01 hardware.
    </dd>
- <dt>[NRF24 Core layer](/library-stack#nrf24-core-layer)</dt>
    <dd>
        The NRF24 Core Layer which handles the hardware configuration in a more human-friendly way.
    </dd>
- <dt>[Class layer](/library-stack#class-layer)</dt>
    <dd>
        The NRF24 class layer provides different function drivers that perform typical operations and play different roles.
    </dd>


### Hardware

- <dt>[Supported Arduino boards](/hardware)</dt>
    <dd>
        List of the compatible Arduino boards.
    </dd>
- <dt>[Modules](/hardware#nrf24l01-modules)</dt>
    <dd>
        List of the already tested and supported nRF24L01 compatible modules.
    </dd>
- <dt>[NRF24 Development kits](/hardware#nrf24-development-kits)</dt>
    <dd>
        List of the NRF24 avalilable development kits.
    </dd>


### Docs

- <dt>[API documentation](/docs)</dt>
    <dd>
        NRF24 API documentation index.
    </dd>


### Advanced

- <dt>[Arduino CMake](/advanced)</dt>
    <dd>
        Arduino CMake toolchain.
    </dd>
- <dt>[Arduino CMake development](/advanced#arduino-cmake-development)</dt>
    <dd>
        How to structure an Arduino project using Arduino CMake.
    </dd>
- <dt>[Build using CMake](/advanced#build-using-cmake)</dt>
    <dd>
        Build an Arduino CMake project.
    </dd>
- <dt>[Clion integration](/advanced#clion-integration)</dt>
    <dd>
        Arduino development using Clion.
    </dd>


### Contribute

- <dt>[How to Contribute](/contribute)</dt>
    <dd>
        How to contribute to this project. Contribution directives.
    </dd>
- <dt>[Submit an Issue]()</dt>
    <dd>
        Found any bug? Submit a Github issue.
    </dd>
- <dt>[Submit an Enhancement]()</dt>
    <dd>
        Send me your pull requests.
    </dd>
    