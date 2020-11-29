import React from 'react';
import './css/about.css'
import Header from "../Header";
import Footer from "../Footer";
import sloganPhoto from "./css/assets/sloganPhoto.jpg";
import packagePng from "./css/assets/package.png";
import truckPng from "./css/assets/truck.png";
import paymentPng from "./css/assets/payment.png";
import returnsPng from "./css/assets/returns.png";
import loyaltyPng from "./css/assets/loyalty.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkedAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

export const AboutPage = () => {
    return (
        <div>
            <Header/>
            <div className="main-body">
                <div className="container container-about-page" id="slogan">
                    <div className="content-wrap">
                        <div className="slogan-text-div">
                            <h1>Welcome to our reading paradise</h1>
                        </div>
                        <div className="one-image-div slogan-img">
                            <figure>
                                <img src={sloganPhoto} id="slogan-img" alt="sloganPhoto"/>
                            </figure>
                        </div>
                    </div>

                </div>
                <div className="container container-about-page">

                    <div className="text-div">
                        <h2>About Us</h2>
                        <p>We are the team of five people, who are eager to spread literacy among people throughout the
                            globe. <br/>
                            That is why, we offer you a great variety of books and provide a high-quality service to
                            those who also adore reading.</p>

                    </div>
                </div>
                <div className="container container-about-page" id="shipping">
                    <div className="content-wrap">
                        <div className="text-div">
                            <h2>Shipping and delivery</h2>
                            <p>We will deliver your books in the shortest time to any part of the world! <br/>
                                For more information check the Full Shipping & Delivery Policy below.
                            </p>
                        </div>
                        <div className="shipping-images-div">
                            <div className="image-div">
                                <img src={packagePng} id="package-img" alt="package.png"/>
                            </div>
                            <div className="image-div">
                                <img src={truckPng} id="truck-img" alt="truck.png"/>
                            </div>
                        </div>
                    </div>

                    <a className="btn btn-primary-about-page" data-toggle="collapse" href="#collapse-shipping" role="button"
                       aria-expanded="false" aria-controls="collapseExample">
                        Full Shipping & Delivery Policy
                    </a>
                    <div className="collapse" id="collapse-shipping">
                        <div className="card card-body">
                            SHIPPING
                            The cost of US domestic shipping (for items other than “Instant” items ordered with Next Day
                            shipping) is $12 to the 48 contiguous states and $15 to Hawaii and Alaska.

                            The cost of shipping for “Instant” items ordered with Next Day shipping is $25. Please note,
                            Next Day shipping is only available for “Instant” sneaker items with a delivery address
                            within the 48 contiguous states and is not available for orders to be delivered to PO Boxes
                            or military bases.

                            “Instant” items also incur a 6.5% priority processing fee.

                            The cost of shipping for items to be delivered to an address in the People’s Republic of
                            China is $25.

                            For a limited time, the cost of shipping for items to be delivered to an address in Canada
                            is $30 and $40 to all other international countries other than the People’s Republic of
                            China.

                            Customers may incur additional charges for purchases of multiple items or heavy items.

                            All sneaker items except for “Instant” items are shipped to us first for authentication and
                            verification before being delivered to you. It will typically take 7-10 business days (M-F)
                            for sneaker orders to be delivered to a buyer located in the US, since it takes
                            approximately 3-4 business days to get to us, 1-2 business days to authenticate and 3-4
                            business days to ship to you.

                            Sneaker items that are labeled “Instant” have already been authenticated and verified and
                            ship directly from our facilities to you. Excluding deliveries to PO boxes and military
                            bases, it will typically take 3-4 business days for an “Instant” sneaker item ordered before
                            11:00 am PT with standard shipping to be delivered to a buyer located in the 48 contiguous
                            states and 4-5 business days for an “Instant” sneaker item ordered after 11:00 am PT with
                            standard shipping to be delivered to a buyer located in the 48 contiguous states.

                            Next Day shipping is a shipping option for “Instant” sneaker items that is available only to
                            buyers located in the 48 contiguous states, excluding PO boxes and military bases. It will
                            typically take 1 business day for an “Instant” sneaker item ordered before 11:00 am PT with
                            Next Day shipping to be delivered to a buyer located in the 48 contiguous states and 2
                            business days for an “Instant” sneaker item ordered after 11:00 am PT with Next Day shipping
                            to be delivered to a buyer located in the 48 contiguous states.

                            Some apparel and accessory items have been pre-verified and authenticated and ship directly
                            from our trusted retail and boutique partners, while other apparel and accessory items are
                            shipped to us first for authentication and verification before being delivered to you. It
                            will typically take 4-8 business days for an apparel or accessory item order to be delivered
                            to a buyer located in the US.

                            For international orders, delivery times vary due to customs. For items with a delivery
                            address in the People’s Republic of China, import duties will be included at checkout for
                            buyers who enter their national identification number and the items will be delivered duty
                            paid (i.e., no additional duties should be required to be paid upon delivery). For all other
                            international orders and for items with a delivery address in the People’s Republic of China
                            where a buyer does not enter their national identification number, import duties are not
                            included, and you will be responsible for them upon arrival.

                            Delivery times are estimates and are not guaranteed, as shipments may be affected by
                            weather-related delays or events outside of our control.

                            If your order is returned to us as undeliverable, your item(s) will be placed into GOAT
                            Storage under your account. Please see “GOAT Storage” below for information on how to
                            retrieve items from GOAT Storage.
                        </div>
                    </div>
                </div>


                <div className="container container-about-page" id="payment">
                    <div className="content-wrap">
                        <div className="payment-images-div">
                            <div className="image-div">
                                <img src={paymentPng} id="payment-img"/>
                            </div>
                        </div>
                        <div className="text-div">
                            <h2>Payment options</h2>
                            <p>We accept several methods of payments. If you purchase items in the United States, we
                                accept American Express,
                                MasterCard and Visa. Alternate methods of payment include Apple Pay, Google Pay, PayPal,
                                Affirm (US only), Afterpay (US only), and Alipay.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container container-about-page" id="returns">
                    <div className="content-wrap">
                        <div className="text-div">
                            <h2>Returns</h2>
                            <p>We want you to be happy with your purchase, which is why we accept returns on
                                purchases <br/>
                                that are in the same condition as when shipped and that do not fall within <br/>
                                any of the categories described in the Full Returns Policy below. </p>
                        </div>
                        <div className="one-image-div">
                            <div className="image-div">
                                <img src={returnsPng} id="returns-img"/>
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-primary-about-page" data-toggle="collapse" href="#collapse-returns" role="button"
                       aria-expanded="false" aria-controls="collapse-returns">
                        Full Returns Policy
                    </a>
                    <div className="collapse" id="collapse-returns">
                        <div className="card card-body">
                            RETURNS
                            We want you to be happy with your purchase, which is why we accept returns on New In Box,
                            New No Box, GOAT Clean, apparel purchases, and accessory purchases that are in the same
                            condition as when shipped and that do not fall within any of the categories described in the
                            next sentence. We do not issue refunds or accept returns or exchanges on any items listed as
                            "Final Sale" on the checkout page, special items (e.g., Vintage, Sample, ID, Custom, Defect,
                            Pre-Release), any used items, any GOAT Storage items, or any items shipped to a freight
                            forwarder or a delivery address in the People's Republic of China. All purchases of such
                            items are FINAL SALE and we do not issue refunds or accept returns for such purchases.

                            You have 3 days to request a return from the date you received the item(s). To initiate a
                            return, tap “Request Return” in the GOAT app when you receive your package or contact us
                            here. Once we receive your return, the item(s) will be evaluated before your refund is made.
                            Evaluation criteria include the following:

                            Item(s) must include the return label and packing slip provided by us—Please note: Returns
                            will not be processed without a GOAT return label and packing slip.

                            Item(s) must be in the condition they were in when sent by us, including but not limited to:
                            no damage, original tags, no creases as a result of try-on and/or wear, no sole wear or
                            debris (for sneaker items), and all original packaging included.

                            Item(s) must be shipped to us within 3 days from receiving your Return Label. The evaluation
                            process may take up to 7 days from receipt of return request and we reserve the right to
                            make the final decision on all return requests.

                            Once we process your return, we will refund you for the amount you paid for the item(s),
                            less the shipping costs to and from you and less any priority processing fee paid, by
                            issuing you site credit (GOAT credit) to use on future purchases, except as otherwise
                            determined by us in our sole and reasonable discretion.

                            Make sure to only include the item(s) to be returned in your shipping box.

                            If your return request is not approved by us for any reason, we will notify you of our
                            decision via email. For sneaker item(s), you will have the option to have the item(s) sent
                            back to you at your expense or consigned on your behalf with us. For apparel and accessory
                            item(s), you may have the item(s) sent back to you at your expense. If you elect to have
                            item(s) sent back to you, we will send you an invoice for the shipping costs and send the
                            item(s) to you after you have paid for the return shipping costs. If you choose to consign
                            sneaker item(s), we will activate the listing(s) at the same price you paid for such sneaker
                            item(s) and if the sneaker item(s) are sold, you will be paid pursuant to our Fee Policy.
                            You may change the listing price at any time within the GOAT app.

                            For sneaker item(s), if you do not respond within 14 days of receiving notice that your
                            return request was not approved or if you do not pay the shipping invoice within 14 days of
                            receipt, we will consign the sneaker item(s) on your behalf and activate the listing(s) at
                            the same price you paid for such sneaker item(s) and if the sneaker item(s) are sold, you
                            will be paid pursuant to our Fee Policy. You may change the listing price at any time within
                            the GOAT app.

                            If your return request is not approved by us because the item(s) were inauthentic, you will
                            have the option to have the item(s) sent back to you or disposed of by us in our reasonable
                            discretion. If you choose to have the item(s) sent back to you, we will send you an invoice
                            for the shipping costs back to you. If you do not respond within 14 days of receiving notice
                            that your return request was not approved or if you do not pay the shipping invoice within
                            14 days of receipt, we will dispose of the item(s) in our reasonable discretion.

                            If you consign item(s) with us as described above, the terms and conditions under “Consigned
                            Items” in the Selling on GOAT Policy will apply to your consignment of such item(s) with us.
                        </div>
                    </div>
                </div>


                <div className="container container-about-page" id="loyalty">
                    <div className="content-wrap">
                        <div className="one-image-div">
                            <div className="image-div">
                                <img src={loyaltyPng} id="loyalty-img"/>
                            </div>
                        </div>
                        <div className="text-div">
                            <h2>Loyalty program</h2>
                            <p>We offer our most frequent customers great benefits for future purchases.<br/>
                                Check more in the passage below.</p>
                        </div>
                    </div>
                    <a className="btn btn-primary-about-page" data-toggle="collapse" href="#collapse-loyalty" role="button"
                       aria-expanded="false" aria-controls="collapse-loyalty">
                        Loyalty Program
                    </a>
                    <div className="collapse" id="collapse-loyalty">
                        <div className="card card-body">
                            1. What is the SpikePoints Loyalty Program?

                            The SpikePoints Loyalty Program is a customer loyalty program that allows customers to earn
                            SpikePoints that can be redeemed for products on Spikeball.com and other perks.

                            2. Who can join the program?

                            Anyone and everyone who has a stable internet connection. For now.

                            3. How do I join the program?

                            It's simple, just create a customer account on Spikeball.com by clicking the "Login" button
                            in the top right of your screen. Once you've done that, use the "SpikePoints" button in the
                            buttom left of your screen to access your rewards dashboard.

                            4. How does the program work?

                            The program has an array of rewardable actions that can earn you points like sharing our
                            store on social media, reviewing a product, or referring a friend to buy. The program has 3
                            tiers - Recreational, Intermediate, and Premier. The higher your tier, the faster you can
                            earn SpikePoints to unlock rewards.

                            5. How do I redeem points for rewards?

                            Using the SpikePoints dashboard will allow you to see what rewards are available for your
                            tier.

                            6. When will my points be available?

                            It may take up to 7 days for eligible purchases or actions to post to your account. It may
                            take 24 hours for you to be able to redeem Points once rewarded.
                        </div>
                    </div>
                </div>


                <div className="container container-about-page" id="contact">
                    <div className="content-wrap">
                        <div className="contact-text-div">
                            <h2>Contact us</h2>
                            <ul className="list-unstyled pl-lg-5 pl-md-4 contacts-list" id="contacts">
                                <h5>Phone :</h5>
                                <li>
                                    <div className="d-inline-block">
                                        <FontAwesomeIcon icon={faPhoneAlt}/>
                                        &ensp;(097) 019 90 40
                                    </div>
                                </li>
                                <li>
                                    <div className="d-inline-block">
                                        <FontAwesomeIcon icon={faPhoneAlt}/> &ensp;(050) 123
                                        45 67
                                    </div>
                                </li>
                                <li>
                                    <div className="d-inline-block">
                                        <FontAwesomeIcon icon={faPhoneAlt}/> &ensp;(063) 987
                                        65 43
                                    </div>
                                </li>
                                <li>
                                    <div className="d-inline-block">
                                        <FontAwesomeIcon icon={faPhoneAlt}/> &ensp;(067) 447
                                        50 99
                                    </div>
                                </li>
                                <h5><br/>E-mail :
                                </h5>
                                <li>
                                    <div className="d-inline-block">
                                        <FontAwesomeIcon icon={faEnvelope}/> &ensp;dgosan37@gmail.com
                                    </div>
                                </li>
                                <li>
                                    <div className="d-inline-block"><FontAwesomeIcon
                                        icon={faEnvelope}/> &ensp;illiakuznets@gmail.com
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div className="contact-text-div">
                            <h5>Main Office</h5>
                            <div className="d-inline-block"><FontAwesomeIcon icon={faMapMarkedAlt}/> &ensp;Kyiv,
                                Hryhoriya Skovorody St, 2
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.8857006047938!2d30.518733459681254!3d50.463981415080255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f8783f067%3A0x20e77fb079389395!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQmtC40LXQstC-LdCc0L7Qs9C40LvRj9C90YHQutCw0Y8g0LDQutCw0LTQtdC80LjRj8K7!5e0!3m2!1sru!2sua!4v1606591601831!5m2!1sru!2sua"
                                width="600" height="450" frameborder="0" /*style="border:0;"*/ allowfullscreen=""
                                aria-hidden="false" tabindex="0"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}