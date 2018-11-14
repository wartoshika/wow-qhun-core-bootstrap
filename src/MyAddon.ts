import { QhunAddon, Timer, TocValue, bootstrapAddon } from "@wartoshika/wow-qhun-core-ts/src/core";

/**
 * the entry point class of your addon where all comes together
 */
@QhunAddon()
export class MyAddon {

    /**
     * holds the addon version from the .toc file
     */
    @TocValue("Version")
    private version: string;

    /**
     * constructs the addon class and inject declared dependencies automaticly
     * @param timer the timer class that is injected
     * @param author the author of the addon injected from the .toc file
     */
    constructor(
        private timer: Timer,
        @TocValue("Author") author: string
    ) {

        // print the following text after the class has been constructed
        print(
            `This addon has been written by ${author}`,
            `The version is ${this.version}`,
            `Thanks for using QhunCoreTS`
        );

        // call a class function
        this.printText(1000);
    }

    /**
     * automaticly prints a text on the default console 
     */
    private printText(time: number): void {

        // use the injected timer class from the class context and 
        // call the timeout function. after the declared time, the callback function
        // will be executed
        this.timer.timeout(() => {

            // given time has been passed, lets write some text!
            print("One second passed, start to write your addon! :)");
        }, time);
    }
}

// finally the addon needs to be bootstraped. the addon bootstrap phase
// is PLAYER_ENTERING_WORLD per default.
bootstrapAddon(MyAddon);