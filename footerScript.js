function randomQuote(){
                        let qNumber = Math.floor(Math.random() * 16) + 1;
                        console.log(qNumber);
                        switch(qNumber){
                            case 1:{
                                return `<span>Trillions of choices to one final outcome.</span>`;
                                break;
                            }case 2:{
                                return `<span lang="cn"><a href="https://www.youtube.com/watch?v=VJk2etK8I1w">"選ぶ、私が!"</a></span>`;
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
                                return `<span><a href="https://www.youtube.com/watch?v=3V7Rvo4Gvic">"No matter what you do at the crossroads, keep going forward." - Derek Hutchins, 2026</a></span>`;
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
                                return `<span>I've forgotten not what it told me, and I pursued it. Yet, I couldn't figure out whether I'm living against the world in lies or in truths.</span>`
                                break;
                            }case 11:{
                                return `<span>I cannot believe. I do not believe.</span>`
                                break;
                            }case 12:{
                                return `<span lang="cn">我张口想说什么 不为给任何人听 也不为给自己听 <br> I part my lips for speech / not to be heard by else / nor to be heard by self</span>`;
                                break;
                            }case 13:{
                                return `<span>Art isn't and will never be made of reverse engineering.</span>`;
                                break;
                            }case 14:{
                                return `<span>Is water wet? If not, then math is not beautiful.</span>`;
                                break;
                            }case 15:{
                                return `<span lang="cn">“有关太阳的预言里 || 日光永远是节律的 || <a href="./writings/poems.html">绝不可沾染潮湿，不可 || 作伞、行船，到瓢泼里庇护或承载 || 不可作岸，礁石 || 受击打，与波涛相砥磨 || 不做倾覆，搁浅，滞留，幸存的任一缘由 || 也不遏止苔藓 || 不助长花蕾 || 调和各颜色，而不向各颜色倾倒</a>" <br> —— 《调停者的命运》，重返未来：1999</span>`;
                                break;
                            }case 16:{
                                return `You randomly approached it. Slowly, unsure, hesitant, maybe a bit urged and irritated because there's nothing to be seen outside the black box. <br> And you're falling for it.`
                                break;
                            }case 17:{
                                return `Anchor is romance.`;
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