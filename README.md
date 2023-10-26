# Before you start

Hello, this is just to let you know that everything you might read is not currently 100%. As I'm in the process of updating this project. I don't want to remove anything in the previous readme.md file since it might be good to keep it for as long as possible. Once I'm done I'll update the readme futher.
But as a starter I would like you if you are making any changes please just make a multiline comment (/** */) and @ your git username with a short summarize with what you have changed above each section. It would also be helpful if you use the ToDo command this way we can better see what needs to be updated and what is currently working alright.


Thank you for reading

-SeeYouMan

# Minecraft Enchantment Simulator

##Instructions

* To use online, go to https://github.com/Zazcallabah/mce/downloads and select 'Single download version'.
* To use offline, fork this repo (or download a tagged version) and open index.html.
* I would recommended that you use Chrome / Chromium, because it is what I've used to test and develop this app. But use whatever you feel works. Run the tests on http://jsperf.com/testing-mce-performance to see performance comparison.

Choose material and item type from the menu at the left. The graphs will immediately update to represent the simulated probability of receiving different possible enchantments. Use the + and - buttons to select a chosen enchantment level and see how the probabilities change.

###Modes
####Graph enchantments
This mode will display a bar for each possible enchantment given at your selected level. The height of the bar represents the probability to receive the enchantment.
####Graph levels
This mode will display a bar for each level. The height of the bar represents the probability for receiving your selected enchantment at the selected power level for that level.

##Details:

The script will run a simulated enchantment of given item at given level a given number of times. The procedure matches
what the minecraft source code does at version 1.0.0, and should be pretty representative.
The data from the simulations, basically a count of how many times each enchantment was received, is then shown in bar
chart form. Mouseover the bars for detailed information.

Each bar will display the mean value for the probability of getting an enchantment as well as (optionally) a 95 percent level
confidence interval. (That means that there is a 95 percent chance that the true value can be found between the upper and
lower line in each bar - based on the simulation.) The middle line in each bar is the mean value. I think the values
forms a normal distribution around this value, but I'm not sure.

###Charts:
Enchantment distribution. - This is the most relevant result of the simulation. Each enchantment seen is
represented by a bar, with the height being set to the percentage of times that enchantment was seen. Note that since
some simulations generate several enchantments at once, the sum of the percentages often become more than 100. (How
much more is given as "enchantment count saturation" in the info box.)

Number of enchantments - A simple chart that shows the probability of receiving multiple enchantments.

###Info box:
This is mainly the bar charts in text form for usability purposes.

##Are these values correct?
I think so. If you want to help check for bugs, the minecraft enchantment algorithms are located in js/mc.js and the enchantment data is stored in js/enchantments.js. The statistics are calculated using the updateSum method in js/tools.js. Those would probably be good places to start checking out.

##License:
My code and text is published at github.com/zazcallabah/mce with a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
Note that this probably doesn't include the ported data extracted from the minecraft source
