<script>
    import Logo from "../Images/logo.png";
    import Finance from "../Images/finance.png";
    import User1 from "../Images/outline-user-icon-1.png";
    import User2 from "../Images/outline-user-icon-2.png";
    import User3 from "../Images/outline-user-icon-3.png";
    import Playstore from "../Images/playstore.jpg";
    import Appstore from "../Images/appstore.jpg";
</script>

<header>
    <nav class="container flex justify-between items-center p-6">
        <div>
            <a href="#home">
                <img src={Logo} alt="Logo Images" class="h-10 w-14">
            </a>
        </div>
        <div>
            <ul class="hidden lg:flex items-center space-x-6">
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Home</a></li>
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Features</a></li>
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Testimonial</a></li>
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Pricing</a></li>
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Blog</a></li>
                <li><a href="#" class="font-medium hover:text-orange-300 ease-in duration-200">Contact</a></li>

                <li><button class="btn">free trial</button></li>
            </ul>
        </div>
        <div class="lg:hidden">
            <i class="fa fa-bars text-2xl"></i>
        </div>
    </nav>
</header>

<main>
    <section id="home" class="relative">
        <div class="blob1"></div>
        <div class="blob2"></div>
        <div class="container py-10">
            <div class="flex items-center flex-col lg:flex-row text-center lg:text-left lg:space-x-20">
                <div class="mb-12 lg:w-1/2">
                    <h2 class="md:text-5xl lg:text-5xl  font-bold capitalize text-3xl mb-4 lg:leading-tight md:leading-tight">awesome app for your financial.</h2>
                    <p class="mb-10 leading-relaxed lg:text-lg">This should be used to tell a story and let your users know a little more about app and it's use, How can benefit them.</p>
                    <button class="btn">download app</button>
                </div>
                <div>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/mobile-wallet-5711415-4789237.png?f=webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="features" class="bg-color-features">
        <div class="container py-20">
            <div class="text-center m-auto mb-20 lg:w-1/2">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">our features</h4>
                <h2 class="title">easy to manage your all payments by our app</h2>
            </div>

           <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <div class="border-2 border-solid border-gray-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-secondary ease-in duration-200">
                <div class="bg-orange-500 inline-block rounded-2xl py-5 px-6">
                    <i class="fa fa-calendar text-3xl"></i>
                </div>
                <h2 class="text-xl font-bold py-4">Expense Trackering</h2>
                <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
            </div>

            <div class="bg-color-secondary border-2 border-solid border-gray-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-secondary ease-in duration-200">
                <div class="bg-orange-500 inline-block rounded-2xl py-5 px-6">
                    <i class="fa fa-bar-chart text-3xl"></i>
                </div>
                <h2 class="text-xl font-bold py-4">Finance Snapchat</h2>
                <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
            </div>

            <div class="border-2 border-solid border-gray-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-secondary ease-in duration-200">
                <div class="bg-orange-500 inline-block rounded-2xl py-5 px-6">
                    <i class="fa fa-phone text-3xl"></i>
                </div>
                <h2 class="text-xl font-bold py-4">Support 24/24</h2>
                <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
            </div>
           </div>
        </div>
    </section>

    <section id="saving-money">
        <div class="container py-10 relative">
            <div class="blob1"></div>
            <div class="blob2"></div>
            <div class="flex flex-col items-center justify-between lg:flex-row text-center lg:text-left md:text-center">
                <div class="md:w-4/5">
                    <img src="https://static.vecteezy.com/system/resources/previews/010/915/957/original/3d-money-saving-wallet-with-holding-money-and-gold-coin-or-3d-money-saving-wallet-icon-free-png.png" alt="Saving-Money Images">
                </div>
                <div class="lg:w-4/5 md:w-4/5">
                    <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">Saving Money</h4>
                    <h2 class="title mb-4">Best Financing app to save your money</h2>
                    <p class="mb-10 leading-relaxed">Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control your card easily and send money someone just one click.</p>
                    <button class="btn">read more</button>
                </div>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="bg-color-features">
        <div class="container py-20">
            <div class="text-center m-auto mb-20 lg:w-1/2">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">how it works</h4>
                <h2 class="title">grow up your money saving</h2>
            </div>

            <div class="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                <div class="text-center cursor-pointer ">
                    <div class="relative bg-color-secondary py-3 px-7 rounded-lg inline-block cursor-pointer hover:bg-orange-500 ease-in duration-200">
                     <p class="text-5xl font-semibold">1</p>
                    </div>
                     <h3 class="text-xl font-bold py-4">Expense Trackering</h3>
                     <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
                </div>

                <div class="text-center cursor-pointer ">
                    <div class="bg-orange-500 py-3 px-6 rounded-lg inline-block cursor-pointer">
                     <p class="text-5xl font-semibold">2</p>
                    </div>
                     <h3 class="text-xl font-bold py-4">Setup Your Profile</h3>
                     <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
                </div>

                <div class="text-center cursor-pointer ">
                    <div class="bg-color-secondary py-3 px-6 rounded-lg inline-block cursor-pointer hover:bg-orange-500 ease-in duration-200">
                     <p class="text-5xl font-semibold">3</p>
                    </div>
                     <h3 class="text-xl font-bold py-4">Enjoy The Features!</h3>
                     <p class="leading-relaxed">We use an application designed a testing gnose to keep away</p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonial">
        <div class="container py-20">
            <div class="text-center m-auto mb-20 lg:w-1/2">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">user review</h4>
                <h2 class="title">what clients say about our app after use it</h2>
            </div>

            <div class="mt-8">
                <div class="flex items-center justify-center flex-wrap ">
                    <img src={User2} alt="" class="h-20 w-20 p-1 m-3 cursor-pointer rounded-full border-2 border-solid border-orange-500">
                    <img src={User1} alt="" class="h-20 w-20 p-1 m-3 cursor-pointer rounded-full  hover:border-2 hover:border-solid hover:border-orange-500 ease-in duration-200">
                    <img src={User3} alt="" class="h-20 w-20 p-1 m-3 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-orange-500 ease-in duration-200">
                    <img src={User1} alt="" class="h-20 w-20 p-1 m-3 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-orange-500 ease-in duration-200">
                    <img src={User2} alt="" class="h-20 w-20 p-1 m-3 cursor-pointer rounded-full hover:border-2 hover:border-solid hover:border-orange-500 ease-in duration-200">
                </div>

                <div class="grid place-items-center text-center m-auto lg:w-4/5 min-h-[40vh]">
                    <div>
                        <p class="md:text-2xl mb-6">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"!</p>
                        <h4 class="font-bold text-orange-500 mb-1">John Mark</h4>
                        <p class="text-sm">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing" class="bg-color-features">
        <div class="container py-20">
            <div class="text-center m-auto mb-20 lg:w-1/2">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">Pricing</h4>
                <h2 class="title">get in reasonable price</h2>
            </div>

            <div class="mt-4 flex items-center gap-4 justify-center">
                <p>Bill Monthly</p>
                <label for="" class="relative inline-block h-8 w-20 rounded-full">
                    <input type="checkbox" id="toggleBtn" class="peer opacity-0 h-0 w-0">
                    <span class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary border border-solid border-gray-500 rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before-bottom-1 before:top-1 before:left-1 before:rounded-full before:bg-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-orange-500 cursor-pointer"></span>
                </label>
                <p>Bill Anually</p>
            </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div class="flex flex-col py-8 mt-10 border-2 border-solid border-gray-500 px-6 rounded-lg">
                    <h2 class="text-5xl md:text-6xl font-bold py-4"><span class="text-orange-500">$</span>120<span class="text-sm font-thin">/per month</span></h2>
                    <h4 class="font-bold text-2xl py-3">Basic</h4>
                    <p class="font-semibold text-lg leading-snug capitalize">for beginner who want to scale business globally </p>
                    <div class="mt-8 flex flex-col">
                        <div>
                        <ul class="cursor-pointer">
                            <li class="underline">Expense Management</li>
                            <li class="underline">Card Mangement</li>
                            <li class="underline">Instant Statistic</li>
                            <li class="underline">Bookmark Function</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col py-8 mt-10 border-2 border-solid border-gray-500 py-4 px-6 rounded-lg">
                    <h2 class="text-5xl md:text-6xl font-bold py-4"><span class="text-orange-500">$</span>150<span class="text-sm font-thin">/per month</span></h2>
                    <h4 class="font-bold text-2xl py-3">Standard</h4>
                    <p class="font-semibold text-lg leading-snug capitalize">for beginner who want to scale business globally </p>
                    <div class="mt-8 flex flex-col">
                        <div>
                            <ul class="cursor-pointer">
                                <li class="underline">Expense Management</li>
                                <li class="underline">Card Mangement</li>
                                <li class="underline">Instant Statistic</li>
                                <li class="underline">Bookmark Function</li>
                            </ul>
                            </div>
                    </div>
                </div>

                <div class="flex flex-col py-8 mt-10 border-2 border-solid border-gray-500 py-4 px-6 rounded-lg">
                    <h2 class="text-5xl md:text-6xl font-bold py-4"><span class="text-orange-500">$</span>500<span class="text-sm font-thin">/per month</span></h2>
                    <h4 class="font-bold text-2xl py-3">Premium</h4>
                    <p class="font-semibold text-lg leading-snug capitalize">for beginner who want to scale business globally </p>
                    <div class="mt-8 flex flex-col">
                        <div>
                            <ul class="cursor-pointer">
                                <li class="underline">Expense Management</li>
                                <li class="underline">Card Mangement</li>
                                <li class="underline">Instant Statistic</li>
                                <li class="underline">Bookmark Function</li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="blog">
        <div class="px-10 lg:px-20 m-auto py-20">
            <div class="text-center m-auto mb-20 lg:w-4/5">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">Innovation and quality improvement</h4>
                <h2 class="title">Latest updates, solutions and company news</h2>
            </div>

            <div class="grid gap-5 items-center lg:grid-cols-3 md:grid-cols-2">
                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                    </div>

                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>29 December 2023</p>
                            <p>3 min read</p>
                        </div>

                        <a href="#blog" class="text-2xl font-bold underline hover:text-orange-500 hover:no-underline">Four ways to cheer yourself up on Blue Monday!</a>
                        <p class="leading-relaxed my-5">on the second edition of Serious Business, Inc. editor Christopher Kim and Fusion senior editor Chrsitian vic...</p>
                        <a href="#blog" class="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out">
                            <span class="capitalize tracking-wider underline hover:no-underline">read more</span>
                        </a>
                    </div>
                </div>

                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src="https://www.danielleskosky.com/wp-content/uploads/media-uploads/laptop-screen-blog.jpg" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                    </div>

                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>29 December 2023</p>
                            <p>5 min read</p>
                        </div>

                        <a href="#blog" class="text-2xl font-bold underline hover:text-orange-500 hover:no-underline">How to Organized your Budget for Productivity?</a>
                        <p class="leading-relaxed my-5">Global provider connected  products for consumers, and enterprises worldwide, supply chain control is everything...</p>
                        <a href="#blog" class="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out">
                            <span class="capitalize tracking-wider underline hover:no-underline">read more</span>
                        </a>
                    </div>
                </div>

                <div>
                    <div class="lg:h-[40vh] rounded-xl scale-100 overflow-hidden">
                        <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/vdw3fdnjrjqyxxscep5n" alt="" class="lg:h-full w-full hover:scale-125 transition duration-300 ease-in-out">
                    </div>

                    <div>
                        <div class="flex items-center gap-5 py-5">
                            <p>29 December 2023</p>
                            <p>1 min read</p>
                        </div>

                        <a href="#blog" class="text-2xl font-bold underline hover:text-orange-500 hover:no-underline">Should Small Businesses Be Entitled to system?</a>
                        <p class="leading-relaxed my-5">Our team provides skilled & experienced managers who know the intricacies of this vertical and focus...</p>
                        <a href="#blog" class="inline-block font-bold hover:text-orange-500 transition-all duration-300 ease-in-out">
                            <span class="capitalize tracking-wider underline hover:no-underline">read more</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="download" class="bg-color-features">
        <div class="container h-[80vh] grid place-content-center">
            <div class="text-center lg:w-4/5  m-auto">
                <h2 class="title">download app now and save your money</h2>
                <p class="leading-relaxed pt-5">Serving an impressive list of long term money with experience and expertise in multiple industries.</p>

                <div class="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
                    <a href="#appstore" class="grid place-items-center rounded-lg bg-white h-16 w-44 hover:opacity-70 ease-in duration-150">
                        <img src={Appstore} alt="">
                    </a>
                    <a href="#playstore" class="grid place-items-center rounded-lg bg-white h-16 w-44 hover:opacity-70 ease-in duration-150">
                        <img src={Playstore} alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container py-20">
            <div class="text-center m-auto mb-20 md:w-1/2">
                <h4 class="text-orange-500 font-bold capitalize text-lg mb-4">have a questation</h4>
                <h2 class="title">get in touch</h2>
            </div>

            <form>
                <div class="w-full text-center m-auto lg:w-2/3">
                    <div class="text-color-primary grid gap-6 mb-6 md:grid-cols-2">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500 font-medium" placeholder="Name">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500 font-medium" placeholder="Email">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500 font-medium" placeholder="Phone">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500 font-medium" placeholder="Company">
                    </div>

                    <textarea rows="4" class="text-color-primary bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-orange-500 font-medium" placeholder="Message"></textarea>

                    <button class="btn mt-6">send message</button>
                </div>
            </form>
        </div>
    </section>

    <section id="footer">
        <div class="bg-color-features relative">
            <div class="container lg:px-10 py-10">
                <div class="grid md:grid-cols-3 gap-10 pb-10">
                    <div class="space-y-6">
                        <h4 class="font-bold text-lg">About App</h4>
                        <p class="leading-relaxed capitalize">This should be used to tell a story and include any testemonials you might have about your product or service for your clients</p>
                        <div class="flex items-center gap-5">
                            <p>Follow Us</p>
                            <i class="fa fa-facebook-f cursor-pointer hover:text-orange-500"></i>
                            <i class="fa fa-instagram cursor-pointer hover:text-orange-500"></i>
                            <i class="fa fa-twitter cursor-pointer hover:text-orange-500"></i>
                            <i class="fa fa-youtube-play cursor-pointer hover:text-orange-500"></i>
                        </div>
                    </div>
                    <div class="flex justify-between md:justify-around">
                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">Quick Links</h4>
                            <ul class="space-y-3">
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Home</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Features</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Testemonial</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Pricing</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Blog</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div class="space-y-6">
                            <h4 class="font-bold text-lg">Help</h4>
                            <ul class="space-y-3">
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">About Us</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Partners</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Career</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Reviews</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Terms & Conditions</a></li>
                                <li class="underline hover:no-underline hover:text-orange-500"><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <h4 class="font-bold text-lg">News Letter</h4>
                        <p class="leading-relaxed capitalize">Subscribe with email and loads of news will  be sent to you</p>
                        <div class="flex items-center">
                            <input type="text" class="w-3/4 text-color-primary p-2 bg-white lg:p-rounder-l-md focus:outline-none font-medium rounded-l-lg" placeholder="Enter Your Email">
                            <button type="submit" class="px-4 py-2 lg:py-3 lg:px-5 hover:opacity-90 trasition duration-200 bg-orange-500 font-medium rounded-r-md"><i class="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center pt-10 border-t border-gray-500">
                    <p class=" text-sm">2024 @ JMD. Allright Reserved.</p>
                </div>
            </div>
        </div>
    </section>
</main>
