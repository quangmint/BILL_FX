// --- BƯỚC 1: Cấu hình các Mẫu (Templates) ---

// 🔥 KHỐI CẤU HÌNH THÔNG TIN LOGO/ẢNH CHI TIẾT CỦA CÁC NGÂN HÀNG (DÙNG CHO TÍNH NĂNG ĐÍNH KÈM)
const BANK_DETAILS = {
    "MB BANK": {
        PATH: 'MBBANK_TP.png',
        COORDS: { 
            X: 310, // CẦN ĐO LẠI TRÊN ẢNH TP BANK CỦA BẠN
            Y: 1760, // CẦN ĐO LẠI TRÊN ẢNH TP BANK CỦA BẠN
            W: 317.2, // Chiều rộng
            H: 94.4  // Chiều cao
        }
    },
    "VP BANK": {
        PATH: 'VPBANK_TP.jpg',
        COORDS: { 
            X: 100, 
            Y: 100, 
            W: 500, // Kích thước ví dụ
            H: 150  // Kích thước ví dụ
        }
    },
    "TECHCOM BANK": {
        PATH: 'TECHCOMBANK_TP.jpg',
        COORDS: { 
            X: 100, 
            Y: 100, 
            W: 600, // Kích thước ví dụ
            H: 200  // Kích thước ví dụ
        }
    }
};

const TEMPLATES = {
    // TP BANK (Template 1)
    "tpbank": { 
        title: "Tạo Phiếu TP BANK",
        imagePath: 'TP_BANK.jpg', 
        fontStyle: 'bold 36px Roboto', 
        fontColor: '#000000', 
        
        // TỌA ĐỘ VÀ CẤU HÌNH CHO TỪNG TRƯỜNG
        fields: {
            // ĐÃ ĐỔI FONT SANG OPEN SANS VÀ ĐỘ ĐẬM 600
            timeClock: { 
                label: "Đồng hồ", 
                Y: 80,             
                X: 110,            
                fontSize: '600 52px Open Sans', 
                textAlign: 'center', 
                color: '#ffffffff'
            }, 
            amount:    { 
                label: "Số tiền", 
                Y: 1560, 
                X: 750,
                fontSize: 'bold 105px Roboto', 
                textAlign: 'center',
                color: '#000000',
                spacing: 5 // ĐỘ GIÃN CÁCH KÝ TỰ SỐ
            },
            name:      { 
                label: "Tên", 
                Y: 1750, 
                X: 720, 
                fontSize: 'bold 58px Roboto', 
                textAlign: 'center',
                color: '#853acb'
            },
            bank:      { 
                label: "BANK", 
                Y: 1850, 
                X: 700, 
                fontSize: 'normal 52px Roboto', 
                textAlign: 'left',
                color: '#2c1e4f'
            },
            account:   { 
                label: "Số TK", 
                Y: 1825, 
                X: 700, 
                fontSize: 'normal 52px Roboto', 
                textAlign: 'left',
                color: '#2c1e4f'
            },
            content:   { 
                label: "Nội dung", 
                Y: 2000, 
                X: 131, 
                fontSize: '500 53px Roboto', 
                textAlign: 'right',
                color: '#2c1e4f'
            },
            timeDetail:{ 
                label: "Thời gian GD", 
                Y: 2115, 
                X: 1317, 
                fontSize: '500 53px Roboto', 
                textAlign: 'right',
                color: '#2c1e4f'
            }
        },
    }, 
    
    // TECH COM BANK (Template 2)
    "techcombank": {
        title: "Tạo Bill TECHCOM Bank",
        imagePath: 'TECHCOMBANK.jpg', 
        fontStyle: 'italic 50px "Times New Roman"',
        fontColor: '#800000', 
        nameY: 500,
        roleY: 600,
    },
    
    // VP BANK (Template 3)
    "vpbank": {
        title: "Tạo Bill VP Bank",
        imagePath: 'VPBANK.jpg', 
        fontStyle: 'bold 70px Impact',
        fontColor: '#0000FF', 
        nameY: 400,
        roleY: 520,
    },
};

// --- BƯỚC 2: Khởi tạo biến và sự kiện ---
const selectionScreen = document.getElementById('selectionScreen');
const inputResultScreen = document.getElementById('inputResultScreen');
const documentTitle = document.getElementById('documentTitle');
const templateButtons = document.querySelectorAll('.template-btn');
const backBtn = document.getElementById('backBtn');
const generateBtn = document.getElementById('generateBtn');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const finalImage = document.getElementById('finalImage');
const downloadLink = document.getElementById('downloadLink');

// KHAI BÁO 7 BIẾN INPUT
const nameInput = document.getElementById('nameInput');
const timeClockInput = document.getElementById('timeClockInput');
const amountInput = document.getElementById('amountInput');
const bankInput = document.getElementById('bankInput'); 
const accountInput = document.getElementById('accountInput');
const contentInput = document.getElementById('contentInput');
const timeDetailInput = document.getElementById('timeDetailInput');

let currentTemplate = null; 

// Hàm chuyển sang màn hình nhập liệu
function showInputScreen(templateKey) {
    currentTemplate = TEMPLATES[templateKey];
    
    documentTitle.textContent = currentTemplate.title;

    selectionScreen.style.display = 'none';
    inputResultScreen.style.display = 'block';

    document.getElementById('resultArea').style.display = 'none';

    // XÓA DỮ LIỆU CŨ KHI CHUYỂN MẪU
    timeClockInput.value = '';
    amountInput.value = '';
    nameInput.value = '';
    // ĐẶT LẠI LỰA CHỌN MẶC ĐỊNH CHO DROP DOWN BANK
    bankInput.value = 'TP BANK'; 
    accountInput.value = '';
    contentInput.value = '';
    timeDetailInput.value = '';
}

// Lắng nghe sự kiện click vào các nút chọn mẫu
templateButtons.forEach(button => {
    button.addEventListener('click', function() {
        const templateKey = this.getAttribute('data-template');
        showInputScreen(templateKey);
    });
});

// Lắng nghe sự kiện nút Quay lại
backBtn.addEventListener('click', function() {
    selectionScreen.style.display = 'block';
    inputResultScreen.style.display = 'none';
});


// --- BƯỚC 3: Xử lý tạo ảnh ---
generateBtn.addEventListener('click', function(event) {
    event.preventDefault();

    // LẤY GIÁ TRỊ THÔ
    const timeClockText = timeClockInput.value.trim();
    const amountText = amountInput.value.trim(); 
    const nameText = nameInput.value.trim();
    const bankText = bankInput.value.trim(); 
    const accountText = accountInput.value.trim();
    const contentText = contentInput.value.trim();
    const timeDetailText = timeDetailInput.value.trim();

    // Kiểm tra mẫu và dữ liệu
    if (!currentTemplate) { 
        alert("Vui lòng chọn mẫu trước khi tạo ảnh!");
        return;
    }

    const img = new Image();
    img.src = currentTemplate.imagePath;

    // BAO BỌC BẰNG LỆNH CHỜ FONT
    document.fonts.ready.then(function () {
        
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0); // VẼ ẢNH NỀN (TP BANK)

            // --- VẼ CHỮ DỰA TRÊN CẤU HÌNH CỦA MẪU ĐÃ CHỌN ---
            
            // Hàm vẽ chữ linh hoạt (đã bao gồm spacing fix)
            const drawField = (text, config) => {
                if (!text) return; 

                const finalX = config.X || (canvas.width / 2); 
                
                ctx.fillStyle = config.color || currentTemplate.fontColor || '#000000';
                ctx.textAlign = config.textAlign || 'center';
                ctx.font = config.fontSize || currentTemplate.fontStyle;
                
                if (config.spacing && config.spacing > 0) {
                    const spacing = config.spacing;
                    const characters = text.split('');
                    let currentX = finalX;
                    const negativeBuffer = 20; 
                    const buffer = 15; 

                    let totalSpacedWidth = 0;
                    let charWidths = [];

                    characters.forEach(char => {
                        let width = ctx.measureText(char).width;
                        charWidths.push(width);
                        totalSpacedWidth += width;
                    });
                    
                    let totalSpacingAdded = 0;
                    for (let i = 0; i < characters.length; i++) {
                        if (characters[i].match(/[0-9]/) && i < characters.length - 1) { 
                            totalSpacingAdded += spacing;
                        }
                        if (characters[i].match(/[,.]/)) {
                            totalSpacingAdded += buffer;
                            totalSpacingAdded -= negativeBuffer; 
                        }
                    }
                    if (characters.length > 0) {
                        if (characters[characters.length - 1].match(/[0-9]/)) {
                            totalSpacingAdded -= spacing;
                        } else if (characters[characters.length - 1].match(/[,.]/)) {
                            totalSpacingAdded -= buffer;
                        }
                    }

                    totalSpacedWidth = ctx.measureText(text).width + totalSpacingAdded;

                    let startX = finalX;
                    if (config.textAlign === 'center') {
                        startX -= totalSpacedWidth / 2;
                    } else if (config.textAlign === 'right') {
                        startX -= totalSpacedWidth;
                    }
                    currentX = startX; 
                    
                    characters.forEach((char, index) => {
                        if (char.match(/[,.]/)) {
                            currentX -= negativeBuffer; 
                        }

                        ctx.fillText(char, currentX, config.Y);
                        let width = charWidths[index];
                        let charSpacing = 0; 

                        if (char.match(/[0-9]/)) {
                            charSpacing = spacing;
                        }
                        else if (char.match(/[,.]/)) {
                            charSpacing = buffer;
                        }
                        
                        currentX += width + charSpacing;
                    });
                } else {
                    ctx.fillText(text, finalX, config.Y);
                }
            }; // HẾT HÀM drawField

            if (currentTemplate.fields) { // Logic vẽ cho TP BANK
                // VẼ 7 TRƯỜNG THÔNG TIN
                if (currentTemplate.fields.timeClock) drawField(timeClockText, currentTemplate.fields.timeClock);
                if (currentTemplate.fields.amount) drawField(amountText, currentTemplate.fields.amount);
                if (currentTemplate.fields.name) drawField(nameText, currentTemplate.fields.name);
                
                // LƯU Ý: CHỈ VẼ TÊN BANK NẾU KHÔNG PHẢI LÀ NGÂN HÀNG CẦN ĐÍNH KÈM LOGO RIÊNG
                const bankToDraw = BANK_DETAILS[bankText] ? '' : bankText; // Đặt trống nếu cần đính kèm logo
                if (currentTemplate.fields.bank) drawField(bankToDraw, currentTemplate.fields.bank);


                if (currentTemplate.fields.account) drawField(accountText, currentTemplate.fields.account);
                if (currentTemplate.fields.content) drawField(contentText, currentTemplate.fields.content);
                if (currentTemplate.fields.timeDetail) drawField(timeDetailText, currentTemplate.fields.timeDetail);

            } else {
                // Logic vẽ cũ cho các mẫu không có cấu hình 'fields' (Techcombank, VPBank)
                ctx.fillStyle = currentTemplate.fontColor; 
                ctx.textAlign = 'center';
                ctx.font = currentTemplate.fontStyle; 
                if(nameInput.value) ctx.fillText(nameInput.value, canvas.width / 2, currentTemplate.nameY);
                
                const roleFontSize = parseInt(currentTemplate.fontStyle.match(/\d+/)[0]) - 20;
                const roleFontFamily = currentTemplate.fontStyle.replace(/\d+/g, '').trim();
                ctx.font = `${roleFontSize}px ${roleFontFamily}`;
                if(amountInput.value) ctx.fillText(amountInput.value, canvas.width / 2, currentTemplate.roleY);
            }

            // 🔥 LOGIC ĐÍNH KÈM LOGO (CHUNG CHO MB BANK, VP BANK, TECHCOM BANK)
            const selectedBankDetail = BANK_DETAILS[bankText];

            if (selectedBankDetail) {
                const logoImg = new Image();
                logoImg.src = selectedBankDetail.PATH;
                
                logoImg.onload = function() {
                    const { X, Y, W, H } = selectedBankDetail.COORDS;
                    // VẼ LOGO LÊN TRÊN CÁC NỘI DUNG KHÁC
                    ctx.drawImage(logoImg, X, Y, W, H);
                    
                    // CHỈ XUẤT ẢNH SAU KHI LOGO ĐÃ TẢI VÀ VẼ XONG
                    exportImage(currentTemplate.title, nameText);
                };
                logoImg.onerror = function() {
                    alert(`Lỗi: Không tìm thấy file logo ${selectedBankDetail.PATH}!`);
                    // Vẫn xuất ảnh không logo nếu lỗi
                    exportImage(currentTemplate.title, nameText); 
                };
            } else {
                // XUẤT ẢNH NGAY LẬP TỨC NẾU KHÔNG CẦN ĐÍNH KÈM LOGO
                exportImage(currentTemplate.title, nameText);
            }

            // HÀM XUẤT ẢNH
            function exportImage(title, name) {
                const dataURL = canvas.toDataURL('image/jpeg');
                document.getElementById('resultArea').style.display = 'block';
                finalImage.src = dataURL;
                downloadLink.href = dataURL;
                downloadLink.download = `${title}-${name || 'file-anh'}.jpg`; 
            }
        };

        img.onerror = function() {
            alert(`Lỗi: Không tìm thấy file ảnh ${currentTemplate.imagePath}! Hãy kiểm tra lại tên file.`);
        };
    
    }); // KẾT THÚC document.fonts.ready.then
});


// LOGIC THÊM: Kích hoạt nút Tạo Ảnh khi nhấn ENTER (Dùng keydown để đảm bảo)
document.getElementById('inputResultScreen').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { 
        e.preventDefault();
        document.getElementById('generateBtn').click(); 
    }
});