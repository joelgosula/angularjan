import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
    constructor() {

    }
    getProducts() {
        return [
            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },

            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },

            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },

            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },

            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },

            { dateOfPurchase: new Date(), name: 'IBM_MAINFRAME', price: '1200', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000020_build-your-own-computer_415.jpeg', description: 'BM mainframes are large computer systems produced by IBM since 1952. During the 1960s and 1970s, the term mainframe computer was almost synonymous with IBM products due to their market share.' },
            { dateOfPurchase: new Date(), name: 'Apple MacBook Pro 13-inch', price: '1800', img_url: 'http://bootswatchtheme.demo.themes.nopaccelerate.com/content/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg', description: 'The Apple MacBook Pro with its impressive features and sleek design is as powerful as it is attractive. It features a multi-touch enabled strip of glass, also known as the Touch Bar, built into its keyboard for instant access to almost all the tools' },
            { dateOfPurchase: new Date(), name: 'HTC One M8 Android L 5.0 Lollipop', price: '245', img_url: 'https://i.ebayimg.com/images/g/iUYAAOSwUMxaF~UO/s-l500.jpg', description: 'HTC Desire 10 pro has high-resolution cameras back and front, elegant, metallic design, and top-tier features like integrated fingerprint sensor and 64GB internal storage space.' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },
            { dateOfPurchase: new Date(), name: 'Canon Camera', price: '25.00', img_url: 'https://rukminim1.flixcart.com/image/832/832/camera/j/s/u/canon-eos-1300d-dslr-original-imaeh33eyhy9gcgm.jpeg?q=70', description: 'Canon EOS 1300D DSLR Camera Body with Single Lens: EF-S 18-55 IS II (16 GB SD Card)  (Black)    ' },
        ];
    }

    getCountries() {
        return [
            { text: "Select Country", value: "" ,states:[]},
            { text: "India", value: "IN" },
         { text: "United States", value: "USA" },
          { text: "Australia", value: "AUS" }];
    }
    
    getGender(){
        return [{text:"Male" ,value:"M"},{text:"Female",value:"F"}]
    }
}