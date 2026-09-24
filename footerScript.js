function randomQuote(){
                        let qNumber = Math.floor(Math.random() * 12) + 1;
                        console.log(qNumber);
                        switch(qNumber){
                            case 1:{
                                return `<span>Trillions of choices and one final outcome.</span>`;
                                break;
                            }case 2:{
                                return `<span lang="cn">"選ぶ、私が!"</span>`;
                                break;
                            }case 3:{
                                return `<span lang="cn">将一切忘掉，然后歇斯底里地回想。|| Forget all to recall.</span>`;
                                break;
                            }case 4:{
                                return `<span>It's only I and science that never leaves me.</span>`;
                                break;
                            }case 5:{
                                return `<span>Despite everything, it's still me.</span>`;
                                break;
                            }case 6:{
                                return `<span>"No matter what you do at the crossroads, keep going forward." - Derek Hutchins, 2025</span>`;
                                break;
                            }case 7:{
                                return `<span>Only when they start hindering from a goal does certain attributes become problems.</span>`;
                                break;
                            }case 8:{
                                return `<span>Who will witness this yearning?</span>`;
                                break;
                            }case 9:{
                                return `<span>Would you dissect my grayscaled heart? Brain? Universe?</span>`;
                                break;
                            }case 10:{
                                return `<span>Larping makes me suffer, and so is not larping.</span>`;
                                break;
                            }case 11:{
                                return `<span>I cannot believe. I do not believe.</span>`
                                break;
                            }case 12:{
                                return `<span lang="cn">我张口想说什么 不为给任何人听 也不为给自己听 <br> I part my lips for speech / not to be heard by else / nor to be heard by self</span>`;
                                break;
                            }
                        }
                    }
                    document.write(`<footer>
                        <div class="footer-quote">
                                    ${randomQuote()}
                                    </div>
                                    <hr>
                                    Randompsn ©2025-2026. All rights reserved.
                                </footer>`);

                    
               
            