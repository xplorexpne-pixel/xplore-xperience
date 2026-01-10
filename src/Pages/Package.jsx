import { useState } from "react";

      
export default function Packages () {
  return (
    <div class="container">
        <header class="head">
            <h1>🌄 Xplore Xperiance</h1>
            <p>Discover the Enchanting Northeast India</p>
        </header>

        
        <div class="state-section">
            <div class="state-header">
                <h2>Arunachal Pradesh</h2>
                <span class="badge">Popular</span>
            </div>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-image">🏔️</div>
                    <div class="package-content">
                        <h3>Tawang & Shergaon</h3>
                        <p>Experience the serene beauty of Tawang Monastery and picturesque Shergaon village nestled in the mountains</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">❄️</div>
                    <div class="package-content">
                        <h3>Tawang & Sangti Valley</h3>
                        <p>Explore the winter paradise and stunning Sangti Valley landscapes with black-necked cranes</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🦏</div>
                    <div class="package-content">
                        <h3>Tawang & Kaziranga</h3>
                        <p>Combine breathtaking mountain monasteries with thrilling wildlife adventures</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🕉️</div>
                    <div class="package-content">
                        <h3>Tawang</h3>
                        <p>Classic Tawang experience featuring the monastery, war memorial, and stunning scenic beauty</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🏞️</div>
                    <div class="package-content">
                        <h3>Mechuka (Menchuka)</h3>
                        <p>Discover the hidden gem of Arunachal Pradesh with pristine valleys and Tibetan culture</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🌅</div>
                    <div class="package-content">
                        <h3>Kibithu & Dong</h3>
                        <p>Witness India's first sunrise at the easternmost point of the country</p>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="state-section">
            <div class="state-header">
                <h2>Assam</h2>
                <span class="badge">Wildlife & Culture</span>
            </div>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-image">🦏</div>
                    <div class="package-content">
                        <h3>Kaziranga National Park</h3>
                        <p>Home to the famous one-horned rhinoceros - UNESCO World Heritage Site with elephant safaris</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🏛️</div>
                    <div class="package-content">
                        <h3>Sivasagar</h3>
                        <p>Explore the ancient capital of the Ahom Kingdom with historic temples and palaces</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🏝️</div>
                    <div class="package-content">
                        <h3>Majuli</h3>
                        <p>World's largest river island featuring unique culture, monasteries, and traditional crafts</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🌊</div>
                    <div class="package-content">
                        <h3>Dima Hasao</h3>
                        <p>The Switzerland of Assam - spectacular hills, valleys, and waterfalls</p>
                        <div class="note">*Special destination</div>
                    </div>
                </div>
            </div>
        </div>

      
        <div class="state-section">
            <div class="state-header">
                <h2>Meghalaya</h2>
                <span class="badge">Wettest Place</span>
            </div>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-image">☔</div>
                    <div class="package-content">
                        <h3>Quick Meghalaya Escape</h3>
                        <span class="duration">3D/2N</span>
                        <p>Perfect weekend getaway covering Shillong and Cherrapunji highlights</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🌉</div>
                    <div class="package-content">
                        <h3>Living Root Bridges Tour</h3>
                        <span class="duration">5D/4N</span>
                        <p>Comprehensive tour including famous living root bridges and crystal clear pools</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🌊</div>
                    <div class="package-content">
                        <h3>Caves & Waterfalls Explorer</h3>
                        <span class="duration">6D/5N</span>
                        <p>Extended exploration of caves, waterfalls, and traditional Khasi villages</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🏔️</div>
                    <div class="package-content">
                        <h3>Complete Meghalaya Experience</h3>
                        <span class="duration">7D/6N</span>
                        <p>Full immersion with offbeat locations, Dawki river, and Mawlynnong village</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="state-section">
            <div class="state-header">
                <h2>Sikkim</h2>
                <span class="badge">Mountain Paradise</span>
            </div>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-image">🏔️</div>
                    <div class="package-content">
                        <h3>Classic Sikkim Tour</h3>
                        <span class="duration">5D/4N</span>
                        <p>Gangtok, Tsomgo Lake, and Nathula Pass adventure with stunning Himalayan views</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🗻</div>
                    <div class="package-content">
                        <h3>Extended Sikkim Expedition</h3>
                        <span class="duration">6D/5N</span>
                        <p>Comprehensive tour covering North Sikkim, Pelling, and Kanchenjunga viewpoints</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="state-section">
            <div class="state-header">
                <h2>Nagaland</h2>
                <span class="badge">Land of Festivals</span>
            </div>
            <div class="packages-grid">
                <div class="package-card">
                    <div class="package-image">🌸</div>
                    <div class="package-content">
                        <h3>Dzukou Valley Trek</h3>
                        <p>Trek through the spectacular valley of flowers in Northeast India with camping</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🎭</div>
                    <div class="package-content">
                        <h3>Hornbill Festival</h3>
                        <p>Experience the Festival of Festivals - December special with tribal dances and culture</p>
                    </div>
                </div>
                <div class="package-card">
                    <div class="package-image">🏘️</div>
                    <div class="package-content">
                        <h3>Mon & Longwa</h3>
                        <p>Visit the land of headhunters and the unique international border village</p>
                    </div>
                </div>
            </div>
        </div>

       
        <div class="state-section coming-soon-section">
            <div class="state-header">
                <h2>Mizoram</h2>
                <span class="badge coming-soon">Coming Soon</span>
            </div>
            <h3>🚀 Exciting Packages Coming Soon!</h3>
            <p>Stay tuned for amazing adventures in the Land of Blue Mountains</p>
        </div>

    
        <div class="state-section coming-soon-section">
            <div class="state-header">
                <h2>Tripura</h2>
                <span class="badge coming-soon">Coming Soon</span>
            </div>
            <h3>🚀 Exciting Packages Coming Soon!</h3>
            <p>Discover the heritage and natural beauty of Tripura</p>
        </div>


        <div class="state-section coming-soon-section">
            <div class="state-header">
                <h2>Manipur</h2>
                <span class="badge coming-soon">Coming Soon</span>
            </div>
            <h3>🚀 Exciting Packages Coming Soon!</h3>
            <p>Explore the jewel of India with Loktak Lake and Imphal valley</p>
        </div>
    </div>

  );
}