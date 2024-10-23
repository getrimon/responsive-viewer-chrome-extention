const devices = {
    mobile: [
        { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
        { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
        { name: 'iPhone 13 Pro', width: 390, height: 844 },
        { name: 'iPhone 12 Pro Max', width: 428, height: 926 },
        { name: 'iPhone 11', width: 414, height: 896 },
        { name: 'Samsung Galaxy S23 Ultra', width: 412, height: 915 },
        { name: 'Samsung Galaxy S22+', width: 360, height: 800 },
        { name: 'Samsung Galaxy S21 Ultra', width: 384, height: 854 },
        { name: 'Samsung Galaxy Note 20', width: 412, height: 915 },
        { name: 'Google Pixel 8', width: 393, height: 851 },
        { name: 'Google Pixel 7 Pro', width: 412, height: 915 },
        { name: 'Google Pixel 6a', width: 393, height: 851 },
        { name: 'OnePlus 10 Pro', width: 412, height: 915 },
        { name: 'OnePlus 9 Pro', width: 412, height: 915 },
        { name: 'Huawei P40 Pro', width: 360, height: 780 },
        { name: 'Huawei Mate 40 Pro', width: 392, height: 828 },
        { name: 'Sony Xperia 1 III', width: 360, height: 840 },
        { name: 'Oppo Find X3 Pro', width: 412, height: 915 },
        { name: 'Vivo X60 Pro+', width: 412, height: 915 },
        { name: 'Motorola Edge+', width: 384, height: 854 },
        { name: 'Realme GT 2 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Mi 11 Ultra', width: 392, height: 832 },
        { name: 'Xiaomi Redmi Note 10', width: 360, height: 800 },
        { name: 'Asus ROG Phone 5', width: 412, height: 915 },
        { name: 'Nokia G50', width: 360, height: 800 },
        { name: 'Google Pixel 5', width: 393, height: 851 },
        { name: 'Samsung Galaxy A53', width: 360, height: 800 },
        { name: 'Samsung Galaxy Z Fold 5', width: 373, height: 819 },
        { name: 'iPhone SE (2022)', width: 375, height: 667 },
        { name: 'Samsung Galaxy A71', width: 393, height: 873 },
        { name: 'Google Pixel 4 XL', width: 412, height: 869 },
        { name: 'Google Pixel 4a', width: 393, height: 851 },
        { name: 'OnePlus Nord 2', width: 412, height: 915 },
        { name: 'Vivo X70 Pro', width: 412, height: 915 },
        { name: 'Sony Xperia 5 III', width: 360, height: 780 },
        { name: 'Motorola Moto G Power', width: 360, height: 780 },
        { name: 'Realme 8 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Redmi Note 9', width: 393, height: 851 },
        { name: 'Samsung Galaxy A52', width: 393, height: 873 },
        { name: 'Oppo A94', width: 360, height: 800 },
        { name: 'Huawei P30 Pro', width: 412, height: 844 },
        { name: 'OnePlus 8T', width: 412, height: 915 },
        { name: 'Nokia 7.2', width: 393, height: 851 },
        { name: 'Sony Xperia 10 II', width: 360, height: 800 },
        { name: 'Motorola One Fusion+', width: 393, height: 873 },
        { name: 'Realme X50 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Mi 10', width: 360, height: 812 },
        { name: 'Samsung Galaxy S10', width: 412, height: 869 },
        { name: 'Google Pixel 3a', width: 393, height: 851 },
        { name: 'Google Pixel 3 XL', width: 412, height: 869 },
        { name: 'OnePlus 7T', width: 412, height: 915 },
        { name: 'Vivo V21', width: 360, height: 800 },
        { name: 'Sony Xperia 1 II', width: 360, height: 780 },
        { name: 'Motorola Edge', width: 384, height: 854 },
        { name: 'Realme 7 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Mi Note 10', width: 393, height: 851 },
        { name: 'Samsung Galaxy Note 10+', width: 412, height: 915 },
        { name: 'Huawei Mate 30 Pro', width: 360, height: 780 },
        { name: 'OnePlus 6T', width: 412, height: 915 },
        { name: 'Nokia 8.3 5G', width: 393, height: 873 },
        { name: 'Sony Xperia 5 II', width: 360, height: 780 },
        { name: 'Motorola G9 Power', width: 360, height: 780 },
        { name: 'Realme X2 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Mi 9', width: 393, height: 851 },
        { name: 'Samsung Galaxy A50', width: 393, height: 873 },
        { name: 'Google Pixel 2 XL', width: 411, height: 823 },
        { name: 'Huawei P20 Pro', width: 360, height: 780 },
        { name: 'Sony Xperia 10', width: 360, height: 780 },
        { name: 'Motorola G7', width: 360, height: 780 },
        { name: 'Realme 6 Pro', width: 360, height: 800 },
        { name: 'Xiaomi Redmi Note 8', width: 393, height: 851 },
        { name: 'Samsung Galaxy S9', width: 412, height: 869 },
        { name: 'Google Pixel 1', width: 360, height: 640 },
        { name: 'OnePlus 5T', width: 412, height: 915 },
        { name: 'Huawei Mate 20 Pro', width: 360, height: 780 },
        { name: 'Sony Xperia XZ3', width: 360, height: 780 },
        { name: 'Motorola Moto G Stylus', width: 360, height: 780 },
        { name: 'Realme X3', width: 360, height: 800 },
        { name: 'Xiaomi Redmi Note 7', width: 393, height: 851 },
        { name: 'Samsung Galaxy A30', width: 393, height: 873 },
        { name: 'Google Nexus 6P', width: 412, height: 732 },
        { name: 'OnePlus 3T', width: 412, height: 915 },
        { name: 'Huawei P10', width: 360, height: 780 },
        { name: 'Sony Xperia XZ2', width: 360, height: 780 },
        { name: 'Motorola G6', width: 360, height: 780 },
        { name: 'Realme C25', width: 360, height: 800 },
        { name: 'Xiaomi Redmi 9', width: 393, height: 851 },
        { name: 'Samsung Galaxy A20', width: 393, height: 873 },
    ],
    tablet: [
        { name: 'iPad Pro 12.9 (2024)', width: 1024, height: 1366 },
        { name: 'iPad Pro 11 (2023)', width: 834, height: 1194 },
        { name: 'iPad Air (5th Gen)', width: 820, height: 1180 },
        { name: 'iPad (10th Gen)', width: 810, height: 1080 },
        { name: 'iPad Mini (6th Gen)', width: 744, height: 1133 },
        { name: 'Samsung Galaxy Tab S9+', width: 800, height: 1280 },
        { name: 'Samsung Galaxy Tab S8 Ultra', width: 800, height: 1280 },
        { name: 'Samsung Galaxy Tab S7+', width: 800, height: 1280 },
        { name: 'Samsung Galaxy Tab A8', width: 800, height: 1280 },
        { name: 'Microsoft Surface Pro 9', width: 912, height: 1368 },
        { name: 'Microsoft Surface Pro 8', width: 912, height: 1368 },
        { name: 'Microsoft Surface Go 3', width: 800, height: 1280 },
        { name: 'Microsoft Surface Go 2', width: 800, height: 1280 },
        { name: 'Amazon Fire HD 10', width: 800, height: 1280 },
        { name: 'Amazon Fire HD 8', width: 800, height: 1280 },
        { name: 'Amazon Fire 7', width: 600, height: 1024 },
        { name: 'Lenovo Tab P12 Pro', width: 900, height: 1440 },
        { name: 'Lenovo Tab M10 Plus', width: 800, height: 1280 },
        { name: 'Lenovo Yoga Tab 13', width: 1350, height: 2160 },
        { name: 'Lenovo Tab P11 Pro', width: 1600, height: 2560 },
        { name: 'Lenovo Tab P11', width: 1200, height: 2000 },
        { name: 'Huawei MatePad Pro', width: 900, height: 1600 },
        { name: 'Huawei MatePad 11', width: 840, height: 1400 },
        { name: 'Huawei MediaPad M5', width: 800, height: 1280 },
        { name: 'Xiaomi Pad 6 Pro', width: 1600, height: 2560 },
        { name: 'Xiaomi Pad 5', width: 1200, height: 2000 },
        { name: 'Google Pixel Tablet', width: 1600, height: 2560 },
        { name: 'Asus ROG Flow Z13', width: 1920, height: 1200 },
        { name: 'Asus VivoTab', width: 768, height: 1366 },
        { name: 'Asus ZenPad 10', width: 800, height: 1280 },
        { name: 'Sony Xperia Z4 Tablet', width: 2560, height: 1600 },
        { name: 'Sony Xperia Z3 Tablet Compact', width: 1200, height: 1920 },
        { name: 'Sony Xperia Tablet Z', width: 1200, height: 1920 },
        { name: 'Chuwi HiPad Plus', width: 1200, height: 2000 },
        { name: 'Alldocube iPlay 40', width: 1200, height: 2000 },
        { name: 'TCL Tab 10S', width: 800, height: 1280 },
        { name: 'TCL Tab Pro 5G', width: 1200, height: 2000 },
        { name: 'Realme Pad', width: 1200, height: 2000 },
        { name: 'Oppo Pad Air', width: 1200, height: 2000 },
        { name: 'Nokia T20', width: 1200, height: 2000 },
        { name: 'Vankyo MatrixPad Z10', width: 800, height: 1280 },
        { name: 'Vankyo MatrixPad S30', width: 800, height: 1280 },
        { name: 'Teclast T40 Pro', width: 800, height: 1280 },
        { name: 'Teclast M40 Pro', width: 800, height: 1280 },
        { name: 'Fusion5 104EvII', width: 800, height: 1280 },
        { name: 'Dragon Touch Max10', width: 800, height: 1280 },
        { name: 'ALLDOCUBE X', width: 1600, height: 2560 },
        { name: 'Pritom TronPad L10', width: 800, height: 1280 },
        { name: 'Simbans TangoTab', width: 800, height: 1280 },
        { name: 'Chuwi Hi10 XR', width: 1280, height: 800 },
        { name: 'Blackview Tab 11', width: 1200, height: 2000 },
        { name: 'Onn. 8" Tablet', width: 800, height: 1280 }
    ],
    desktop: [
        { name: 'MacBook Pro (16-inch)', width: 1440, height: 900 },
        { name: 'iMac 27-inch (5K)', width: 2560, height: 1440 },
        { name: 'Dell XPS 13', width: 1366, height: 768 },
        { name: 'HP Spectre x360', width: 1920, height: 1080 },
        { name: 'Alienware Aurora R12', width: 1920, height: 1080 },
        { name: 'MSI Trident 3', width: 1920, height: 1080 },
        { name: 'Lenovo ThinkPad P1', width: 1920, height: 1200 },
        { name: 'Acer Predator Orion 9000', width: 3840, height: 2160 },
        { name: 'Asus ROG Strix G35', width: 2560, height: 1440 },
        { name: 'Apple Mac Pro', width: 2560, height: 1440 },
        { name: 'Corsair One i300', width: 1920, height: 1080 },
        { name: 'HP Pavilion Gaming Desktop', width: 1920, height: 1080 },
        { name: 'iMac 24-inch (M1)', width: 4480, height: 2520 },
        { name: 'Dell OptiPlex 7090', width: 1920, height: 1080 },
        { name: 'Asus Zen AiO 24', width: 1920, height: 1080 },
        { name: 'Microsoft Surface Studio 2', width: 4500, height: 3000 },
        { name: 'Lenovo IdeaCentre AIO 5i', width: 1920, height: 1080 },
        { name: 'HP Omen 30L', width: 2560, height: 1440 },
        { name: 'Razer Tomahawk', width: 2560, height: 1440 },
        { name: 'Acer Aspire TC-895-UA92', width: 1920, height: 1080 },
        { name: 'Dell Inspiron 27 7000', width: 2560, height: 1440 },
        { name: 'Apple Mac mini (M2)', width: 2560, height: 1440 },
        { name: 'Lenovo Legion Tower 5i', width: 2560, height: 1440 },
        { name: 'HP EliteDesk 800 G6', width: 1920, height: 1080 },
        { name: 'MSI MEG Aegis Ti5', width: 2560, height: 1440 },
        { name: 'Asus ProArt Station PD5', width: 3840, height: 2160 },
        { name: 'Acer Nitro 50', width: 1920, height: 1080 },
        { name: 'Dell Precision 7920', width: 3840, height: 2160 },
        { name: 'HP Z2 Mini G5', width: 1920, height: 1080 },
        { name: 'Origin PC Chronos', width: 2560, height: 1440 },
        { name: 'CyberPowerPC Gamer Xtreme', width: 1920, height: 1080 }
    ],
    laptop: [
        { name: 'MacBook Air (M2)', width: 1366, height: 768 },
        { name: 'Dell XPS 15', width: 1920, height: 1080 },
        { name: 'HP Envy 13', width: 1920, height: 1080 },
        { name: 'Lenovo Yoga 9i', width: 1920, height: 1080 },
        { name: 'Asus ZenBook 14', width: 1920, height: 1080 },
        { name: 'Microsoft Surface Laptop 5', width: 2256, height: 1504 },
        { name: 'Acer Swift 3', width: 1920, height: 1080 },
        { name: 'MacBook Pro 14-inch (M1)', width: 3024, height: 1964 },
        { name: 'Razer Blade 15', width: 1920, height: 1080 },
        { name: 'HP Spectre x360 14', width: 1920, height: 1280 },
        { name: 'Asus ROG Zephyrus G14', width: 2560, height: 1600 },
        { name: 'Dell XPS 13', width: 1920, height: 1080 },
        { name: 'Lenovo ThinkPad X1 Carbon Gen 9', width: 1920, height: 1200 },
        { name: 'Acer Aspire 5', width: 1920, height: 1080 },
        { name: 'LG Gram 17', width: 2560, height: 1600 },
        { name: 'Microsoft Surface Laptop 4', width: 2256, height: 1504 },
        { name: 'HP Omen 15', width: 1920, height: 1080 },
        { name: 'Asus TUF Dash F15', width: 1920, height: 1080 },
        { name: 'Alienware x17 R2', width: 1920, height: 1080 },
        { name: 'Apple MacBook Pro 16-inch (M2)', width: 3456, height: 2234 },
        { name: 'Samsung Galaxy Book Pro 360', width: 1920, height: 1080 },
        { name: 'HP Pavilion 15', width: 1920, height: 1080 },
        { name: 'Asus VivoBook S15', width: 1920, height: 1080 },
        { name: 'Dell G5 15 SE', width: 1920, height: 1080 },
        { name: 'Lenovo Legion 5 Pro', width: 2560, height: 1600 },
        { name: 'Asus ZenBook Duo 14', width: 1920, height: 1080 },
        { name: 'HP Elite Dragonfly', width: 1920, height: 1080 },
        { name: 'Gigabyte Aero 15 OLED', width: 3840, height: 2160 },
        { name: 'Acer Nitro 5', width: 1920, height: 1080 },
        { name: 'Lenovo IdeaPad 3', width: 1920, height: 1080 },
        { name: 'Dell Latitude 9420', width: 2560, height: 1600 },
        { name: 'MSI GS66 Stealth', width: 1920, height: 1080 }
    ] 
};

let currentTab = 'mobile';

// Function to handle opening the device in a new window
function openDevice(device) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.windows.create({
            url: tabs[0].url,
            type: "popup",
            width: device.width,
            height: device.height
        });
    });
}

// Function to filter devices based on search input
function filterDevices() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const deviceList = document.getElementById('device-list');
    deviceList.innerHTML = ''; // Clear current list

    devices[currentTab].forEach(device => {
        if (device.name.toLowerCase().includes(searchTerm)) {
            const deviceElement = document.createElement('div');
            deviceElement.classList.add('device-item');
            deviceElement.innerText = `${device.name} - ${device.width} x ${device.height} pixels`;
            deviceElement.addEventListener('click', () => openDevice(device));
            deviceList.appendChild(deviceElement);
        }
    });
}

// Function to set the active tab
function setActiveTab(activeButton) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
    currentTab = activeButton.dataset.tab; // Set current tab
    displayDevices(); // Refresh device list
}

// Function to display devices based on the current tab
function displayDevices() {
    const deviceList = document.getElementById('device-list');
    deviceList.innerHTML = ''; // Clear current list

    devices[currentTab].forEach(device => {
        const deviceElement = document.createElement('div');
        deviceElement.classList.add('device-item');
        deviceElement.innerText = `${device.name} - ${device.width} x ${device.height} pixels`;
        deviceElement.addEventListener('click', () => openDevice(device));
        deviceList.appendChild(deviceElement);
    });
}

// Event listeners
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        setActiveTab(button);
    });
});

document.getElementById('search-input').addEventListener('input', filterDevices);

// Initialize the device list on load
document.addEventListener('DOMContentLoaded', displayDevices);
