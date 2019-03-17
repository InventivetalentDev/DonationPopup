# DonationPopup
Tiny script to show a donation popup to common visitors to a website

[![](https://i.imgur.com/sevD76X.png)](https://patreon.com/inventivetalent)


## Installation
```html
<script>
    window.DOP_config = {
        links: { // Replace with your links
            paypal: "https://paypal.me/inventivetalent",
            patreon: "https://patreon.com/inventivetalent"
        }
    }
</script>
<script src="https://unpkg.com/donationpopup@1.0.0/DonationPopup.min.js"></script>
```  

```
npm install --save donationpopup
```


## Configuration
```js
{
    visits: 10,// Number of visits required for the popup to first show up
    timeout: 24,// Timeout for the 'remind later' option in hours
    text: "Hey there, sorry for the interruption!\nIt looks like you've visited this site a couple of times - if you like it and want to help keep it running, please consider throwing over a small donation :)",// Text of the popup
    postponeText: "Maybe Later",// Text on the 'remind me later' button
    dismissText: "Never!",// Text on the dismiss button
    color: "#9c9c9c",// Background color
    position: "bottom-right",// Position of the popup
    enableAnalytics: false,// Toggle Google Analytics - will send a custom event on clicks if enabled
    links: {
        paypal: "",// PayPal link
        patreon: "",// Patreon link
        custom: null // can be a function to add custom HTML
    }
}
```  
[Check the source](https://github.com/InventivetalentDev/DonationPopup/blob/master/DonationPopup.js#L4) for more advanced configuration options
