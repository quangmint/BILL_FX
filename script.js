// --- BƯỚC 1: Cấu hình các Mẫu (Templates) ---

// KHỐI CẤU HÌNH THÔNG TIN LOGO/ẢNH CHI TIẾT CỦA CÁC NGÂN HÀNG (DÙNG CHO TÍNH NĂNG ĐÍNH KÈM)
const BANK_DETAILS = {
    "MB BANK": {
        PATH: 'MBBANK_TP.png',
        COORDS: { 
            X: 310, Y: 1760, W: 355, H: 97
        }
    },
    "VP BANK": {
        PATH: 'VPBANK_TP.png',
        COORDS: { 
            X: 360, Y: 1760, W: 333, H: 98
        }
    },
    "TECHCOM BANK": {
        PATH: 'TECHCOMBANK_TP.png',
        COORDS: { 
            X: 240, Y: 1760, W: 598, H: 101
        }
    }
};

const TEMPLATES = {
    // 🔥 TP BANK (Template 1) - DÙNG KEY ĐỘC LẬP: receivingBankTP
    "tpbank": { 
        title: "Tạo Phiếu TP BANK",
        imagePath: 'TP_BANK.jpg', 
        fontStyle: 'bold 36px Roboto', 
        fontColor: '#000000', 
        
        // DỮ LIỆU GỢI Ý RIÊNG CHO TP BANK
        placeholders: {
            timeClock: "18:50",
            amount: "1,000,000 VND",
            name: "LE VAN LUYEN",
            account: "1234 5678 9012 3",
            receivingBankTP: "Vietcombank", // KEY ĐỘC LẬP
            content: "LE VAN LUYEN chuyen tien",
            timeDetail: "18:50 06/12/2024"
        },
        
        // CẤU HÌNH FIELDS CỐ ĐỊNH CHO TP BANK
        fields: {
            timeClock: { 
                label: "Đồng hồ", Y: 80, X: 110, fontSize: '600 52px Open Sans', textAlign: 'center', color: '#ffffffff'
            }, 
            amount:    { 
                label: "Số tiền", Y: 1560, X: 750, fontSize: 'bold 105px Roboto', textAlign: 'center', color: '#000000', spacing: 5
            },
            name:      { 
                label: "Tên", Y: 1750, X: 720, fontSize: 'bold 58px Roboto', textAlign: 'center', color: '#853acb'
            },
            bank:      { 
                label: "Ngân hàng (Chủ TK)", Y: 1850, X: 700, fontSize: 'normal 52px Roboto', textAlign: 'left', color: '#2c1e4f'
            },
            account:   { 
                label: "Số TK", Y: 1828, X: 700, fontSize: 'normal 52px Roboto', textAlign: 'left', color: '#2c1e4f' 
            },
            receivingBankTP: { // KEY ĐỘC LẬP MỚI
                label: "Ngân hàng", 
                Y: 1950, X: 700, fontSize: 'normal 52px Roboto', textAlign: 'left', color: '#2c1e4f'
            },
            content:   { 
                label: "Nội dung", Y: 2000, X: 1317, fontSize: '500 53px Roboto', textAlign: 'right', color: '#2c1e4f'
            },
            timeDetail:{ 
                label: "Thời gian GD", Y: 2115, X: 1317, fontSize: '500 53px Roboto', textAlign: 'right', color: '#2c1e4f'
            }
        },
        // Bank options scoped to this template (absolute isolation)
            bankOptions: ['MB BANK','TECHCOM BANK','VP BANK']
    }, 
    
    // 🔥 TECHCOM BANK (Template 2) - DÙNG KEY ĐỘC LẬP: receivingBankTECH
    "techcombank": {
        title: "Tạo Bill TECHCOM Bank",
        imagePath: 'TECHCOMBANK.jpg', 
        fontStyle: '500 50px "SF Pro Display"', 
        fontColor: '#800000', 
        
        // DỮ LIỆU GỢI Ý RIÊNG CHO TECHCOM BANK
        placeholders: {
            timeClock: "18:50",
            amount: "VND 26,500,000",
            name: "LE VAN LUYEN",
            bank: "Techcombank",
            account: "22920192",
            receivingBankTECH: "TP BANK",
            message: "LE VAN LUYEN chuyen tien",
            timeDetail: "30 thg 11, 2025 lúc 17:30",
            transactionId: "FT24152985684128"
        },

        fields: {
            timeClock: {
                label: "Đồng hồ", Y: 80, X: 120, 
                fontSize: '700 50px Roboto',
                textAlign: 'center', color: '#ffffffff'
            },
            amount:   { 
                label: "Số tiền", Y: 1000, X: 100, 
                fontSize: '500 105px Roboto', 
                textAlign: 'left', color: '#000000ff'
            },
            name:     { 
                label: "Tên người nhận", Y: 1265, X: 105, 
                fontSize: '500 63px Roboto', 
                textAlign: 'left', color: '#000000ff'
            },
            account:  { 
                label: "Số tài khoản", Y: 1350, X: 105, 
                fontSize: '500 63px Roboto', 
                textAlign: 'left', color: '#000000ff'
            },
            receivingBankTECH: {
                label: "Ngân hàng nhận",
                Y: 1600, X: 105,
                fontSize: '500 63px Roboto',
                spacing: -3,
                applySpacingToAll: true,
                textAlign: 'left', color: '#000000ff'
            },
            message:  { 
                label: "Lời nhắn", Y: 1820, X: 105, 
                fontSize: '500 63px Roboto', 
                textAlign: 'left', color: '#000000ff'
            },
            timeDetail:{ 
                label: "Thời gian GD", Y: 2050, X: 105, 
                fontSize: '500 63px Roboto', 
                textAlign: 'left', color: '#000000ff'
            },
            transactionId:{ 
                label: "Mã giao dịch", Y: 2270, X: 105, 
                fontSize: '500 63px Roboto', 
                textAlign: 'left', color: '#000000ff'
            }
        },
        // Bank options scoped to this template
        bankOptions: ['MB BANK','TP BANK','VP BANK']
    },
    
    // 🔥 VP BANK (Template 3) - DÙNG KEY ĐỘC LẬP: receivingBankVP
    "vpbank": {
        title: "Tạo Bill VP Bank",
        imagePath: 'VPBANK.jpg', 
        fontStyle: 'bold 70px Impact',
        fontColor: '#0000FF', 
        
        // DỮ LIỆU GỢI Ý RIÊNG CHO VP BANK
        placeholders: {
            amount: "1 000 000 ₫",
            name: "TRAN VAN C",
            account: "9855696969",
            receivingBankVP: "Vietinbank", // KEY ĐỘC LẬP
            timeClock: "16:45",
            content: "TRAN VAN C chuyen tien",
            transactionId: "FT25337964280179/0317985826",
            traceCode: "582661",
            timeDetail: "12/12/2025 16:40:22" 
        },

        // CẤU HÌNH FIELDS CỐ ĐỊNH CHO VP BANK
        fields: {
            amount:   { 
                label: "Số tiền", Y: 400, X: 850, fontSize: 'bold 80px Arial', textAlign: 'center', color: '#333333'
            },
            name:     { 
                label: "Tên người nhận", Y: 550, X: 300, fontSize: '50px Arial', textAlign: 'left', color: '#000000'
            },
            account:  { 
                label: "Số tài khoản", Y: 650, X: 300, fontSize: '50px Arial', textAlign: 'left', color: '#000000'
            },
            receivingBankVP: { // KEY ĐỘC LẬP MỚI
                label: "Ngân hàng thụ hưởng", 
                Y: 700, X: 300, fontSize: '50px Arial', textAlign: 'left', color: '#000000'
            },
            timeClock:{ 
                label: "Thời gian", Y: 750, X: 900, fontSize: '40px Arial', textAlign: 'right', color: '#999999'
            },
            content:  { 
                label: "Nội dung", Y: 900, X: 300, fontSize: '50px Arial', textAlign: 'left', color: '#000000'
            },
            transactionId:{ 
                label: "Mã giao dịch", Y: 1050, X: 700, fontSize: '40px Arial', textAlign: 'center', color: '#555555'
            },
            traceCode:{ 
                label: "Mã tra soát", Y: 1150, X: 700, fontSize: '40px Arial', textAlign: 'center', color: '#555555'
            }
        },
        // Bank options scoped to this template
        bankOptions: ['MB BANK','TP BANK','VP BANK']
    },
};

// Track which template is active (used for output-only mappings)
let currentTemplateKey = null;

// Output-only mapping: per-template mapping from dropdown value -> final printed name
const RECEIVING_BANK_OUTPUT = {
    techcombank: {
        'TP BANK': 'Ngân hàng TMCP Tiên Phong',
        'VP BANK': 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
        'MB BANK': 'Ngân hàng TMCP Quân Đội',
        'BIDV': 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam'
    }
};

function getReceivingBankOutput(templateKey, raw) {
    if (!raw) return '';
    if (!templateKey) return raw;
    const map = RECEIVING_BANK_OUTPUT[templateKey];
    return (map && map[raw]) ? map[raw] : raw;
}

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

// KHAI BÁO BIẾN INPUT CHUNG
const nameInput = document.getElementById('nameInput');
const timeClockInput = document.getElementById('timeClockInput');
const amountInput = document.getElementById('amountInput');
const bankInput = document.getElementById('bankInput'); 
const accountInput = document.getElementById('accountInput');
const contentInput = document.getElementById('contentInput');
const timeDetailInput = document.getElementById('timeDetailInput');

// KHAI BÁO BIẾN CHO TRƯỜNG MỚI (INPUT)
const transactionIdInput = document.getElementById('transactionIdInput');
const traceCodeInput = document.getElementById('traceCodeInput');
const messageInput = document.getElementById('messageInput');
let receivingBankInput = document.getElementById('receivingBankInput'); 
let receivingBankChangeHandler = null;

// KHAI BÁO BIẾN CHO CÁC KHỐI INPUT GROUP (ĐỂ ẨN/HIỆN)
const amountInputGroup = document.getElementById('amountInputGroup');
const nameInputGroup = document.getElementById('nameInputGroup');
const accountInputGroup = document.getElementById('accountInputGroup');

const contentInputGroup = document.getElementById('contentInputGroup'); 
const messageInputGroup = document.getElementById('messageInputGroup');
const transactionIdInputGroup = document.getElementById('transactionIdInputGroup');
const traceCodeInputGroup = document.getElementById('traceCodeInputGroup');
const receivingBankInputGroup = document.getElementById('receivingBankInputGroup');
const timeClockInputGroup = document.getElementById('timeClockInputGroup'); 
const bankInputGroup = document.getElementById('bankInputGroup'); 
const timeDetailInputGroup = document.getElementById('timeDetailInputGroup'); 


let currentTemplate = null; 

// Hàm chuyển sang màn hình nhập liệu
function showInputScreen(templateKey) {
    currentTemplate = TEMPLATES[templateKey];
    currentTemplateKey = templateKey;
    
    documentTitle.textContent = currentTemplate.title;

    selectionScreen.style.display = 'none';
    inputResultScreen.style.display = 'block';

    document.getElementById('resultArea').style.display = 'none';

    // 1. XÓA DỮ LIỆU VÀ GÁN PLACEHOLDER MỚI
    const inputsMap = [
        { key: 'timeClock', input: timeClockInput, group: timeClockInputGroup },
        { key: 'amount', input: amountInput, group: amountInputGroup }, 
        { key: 'name', input: nameInput, group: nameInputGroup }, 
        { key: 'bank', input: bankInput, group: bankInputGroup }, 
        { key: 'account', input: accountInput, group: accountInputGroup }, 
        { key: 'content', input: contentInput, group: contentInputGroup },
        { key: 'timeDetail', input: timeDetailInput, group: timeDetailInputGroup },
        { key: 'transactionId', input: transactionIdInput, group: transactionIdInputGroup },
        { key: 'traceCode', input: traceCodeInput, group: traceCodeInputGroup },
        { key: 'message', input: messageInput, group: messageInputGroup },
        { key: 'receivingBank', input: receivingBankInput, group: receivingBankInputGroup }
    ];

    // Nếu template yêu cầu trường receivingBank theo dạng riêng (ví dụ TECHCOM dùng dropdown),
    // thay thế node #receivingBankInput tương ứng trước khi gán placeholder để tránh mất dữ liệu/đối tượng.
    if (currentTemplate.fields) {
        const needsReceivingBankTECH = !!currentTemplate.fields.receivingBankTECH;
        const existingRecv = document.getElementById('receivingBankInput');

        if (templateKey === 'tpbank') {
            // Đảm bảo xóa hoàn toàn phần 5B cho TP BANK
            if (existingRecv && existingRecv.parentNode) existingRecv.parentNode.removeChild(existingRecv);
            receivingBankInput = null;
        } else if (needsReceivingBankTECH) {
            // Tạo select với nhãn chính xác theo yêu cầu: TP BANK, VP BANK, MB BANK
            const select = document.createElement('select');
            select.id = 'receivingBankInput';
            ['TP BANK', 'VP BANK', 'MB BANK', 'BIDV'].forEach(optText => {
                const o = document.createElement('option');
                o.value = optText;
                o.textContent = optText;
                select.appendChild(o);
            });

            if (existingRecv && existingRecv.parentNode) existingRecv.parentNode.replaceChild(select, existingRecv);
            else if (receivingBankInputGroup) receivingBankInputGroup.appendChild(select);

            receivingBankInput = document.getElementById('receivingBankInput');
        } else {
            // Đảm bảo luôn có một input text mặc định nếu template yêu cầu receivingBank nhưng không phải TECH
            if (!existingRecv) {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'receivingBankInput';
                if (receivingBankInputGroup) receivingBankInputGroup.appendChild(input);
                receivingBankInput = input;
            } else {
                receivingBankInput = existingRecv;
            }
        }
    }

    // Xóa giá trị cũ và gán placeholder
    inputsMap.forEach(({ key, input }) => {
        if (input) {
            // Nếu là trường receivingBank, lấy phần tử hiện tại trong DOM (vì có thể đã được thay thế bằng <select>)
            let domInput = input;
            if (key === 'receivingBank') domInput = document.getElementById('receivingBankInput');

            if (domInput) domInput.value = '';

            let placeholderText = '';
            if (currentTemplate.placeholders) {
                if (key === 'receivingBank') {
                    // Absolute isolation: use ONLY the placeholder that belongs to the current template's
                    // receivingBank field. Do NOT fall back to placeholders from other templates.
                    if (currentTemplate.fields && currentTemplate.fields.receivingBankTECH) {
                        placeholderText = currentTemplate.placeholders.receivingBankTECH || '';
                    } else if (currentTemplate.fields && currentTemplate.fields.receivingBankTP) {
                        placeholderText = currentTemplate.placeholders.receivingBankTP || '';
                    } else if (currentTemplate.fields && currentTemplate.fields.receivingBankVP) {
                        placeholderText = currentTemplate.placeholders.receivingBankVP || '';
                    } else {
                        placeholderText = '';
                    }
                } else {
                    placeholderText = currentTemplate.placeholders[key] || '';
                }
            }

            if (domInput && domInput.tagName === 'SELECT') {
                // Remove any old placeholder option
                const oldPh = domInput.querySelector('option[disabled][data-placeholder]');
                if (oldPh) oldPh.remove();
                // Only use the placeholder text that belongs to the CURRENT template fields
                if (placeholderText) {
                    const ph = document.createElement('option');
                    ph.value = '';
                    ph.disabled = true;
                    ph.selected = true;
                    ph.dataset.placeholder = '1';
                    ph.textContent = placeholderText;
                    domInput.prepend(ph);
                }
            } else if (domInput) {
                domInput.placeholder = placeholderText || '';
            }
        }
    });

    // ĐẶT LẠI LỰA CHỌN MẶC ĐỊNH CHO DROP DOWN BANK (nếu bankInput là select)
    if (bankInput && bankInput.tagName === 'SELECT') {
        if (currentTemplate && currentTemplate.fields && currentTemplate.fields.bank) {
            // Nếu template có cấu hình riêng cho các tùy chọn ngân hàng, dựng lại danh sách option
                if (Array.isArray(currentTemplate.bankOptions)) {
                // Clear existing options
                bankInput.innerHTML = '';
                currentTemplate.bankOptions.forEach(optText => {
                    const o = document.createElement('option');
                    o.value = optText;
                    o.textContent = optText;
                    bankInput.appendChild(o);
                });
                // Prefer 'TECHCOM BANK' for templates that include it, then 'TP BANK' for backward compatibility,
                // otherwise choose the first option
                if (currentTemplate.bankOptions.includes('TECHCOM BANK')) bankInput.value = 'TECHCOM BANK';
                else if (currentTemplate.bankOptions.includes('TP BANK')) bankInput.value = 'TP BANK';
                else bankInput.value = (currentTemplate.bankOptions[0] || '');
            } else {
                bankInput.value = 'TP BANK';
            }
        } else {
            // Nếu mẫu không dùng trường bank thì xóa giá trị để tránh rò rỉ dữ liệu giữa mẫu
            bankInput.value = '';
        }
    }
    
    
    // 2. LOGIC QUẢN LÝ HIỂN THỊ CÁC TRƯỜNG RIÊNG THEO MẪU
    
    // Ẩn tất cả các trường có thể tùy chỉnh
    inputsMap.forEach(({ group }) => {
        if (group) group.style.display = 'none';
    });
    
    // HIỆN CỤ THỂ DỰ TRÊN TEMPLATE ĐƯỢC CHỌN VÀ CẤU HÌNH TRONG fields
    if (currentTemplate.fields) {
        // Lấy danh sách các field được cấu hình trong template hiện tại
        const requiredFields = Object.keys(currentTemplate.fields);

        // Duyệt qua inputsMap để hiển thị các nhóm có key tồn tại trong requiredFields
        inputsMap.forEach(({ key, group }) => {
            let isRequired = requiredFields.includes(key);

            // 🔥 Kiểm tra các Key ĐỘC LẬP MỚI cho trường receivingBankInputGroup
            if (group === receivingBankInputGroup) {
                // Nếu đang mở form cho TP BANK, bắt buộc ẩn phần "Ngân hàng nhận" (phần 5B)
                if (templateKey === 'tpbank') {
                    isRequired = false;
                    // dọn dẹp giá trị và preview, gỡ listener nếu có
                    if (receivingBankChangeHandler && receivingBankInput) {
                        receivingBankInput.removeEventListener('change', receivingBankChangeHandler);
                        receivingBankChangeHandler = null;
                    }
                    // Xóa DOM node #receivingBankInput nếu tồn tại (loại bỏ hoàn toàn phần 5B)
                    const oldNode = document.getElementById('receivingBankInput');
                    if (oldNode && oldNode.parentNode) {
                        oldNode.parentNode.removeChild(oldNode);
                    }
                    receivingBankInput = null;

                    // Xóa preview nếu có
                    if (receivingBankInputGroup) {
                        const prev = receivingBankInputGroup.querySelector('#receivingBankPreview');
                        if (prev && prev.parentNode) prev.parentNode.removeChild(prev);
                    }
                } else {
                    if (requiredFields.includes('receivingBankTP') || 
                        requiredFields.includes('receivingBankVP') || 
                        requiredFields.includes('receivingBankTECH')) {
                        isRequired = true;
                    }
                }
            }

            // Hiển thị group nếu được yêu cầu
            if (group && isRequired) {
                group.style.display = 'block';
            }
        });

        // Nếu sau quá trình hiển thị chúng ta có một trường receivingBankInput mới (select hoặc input),
        // thiết lập preview và listener thay đổi để cập nhật nhãn hiển thị ngay lập tức.
        // Nếu template hiện tại **KHÔNG** khai báo bất kỳ receivingBank nào, hãy chắc chắn xóa node và preview
        if (!currentTemplate.fields.receivingBankTP && !currentTemplate.fields.receivingBankVP && !currentTemplate.fields.receivingBankTECH) {
            if (receivingBankChangeHandler && receivingBankInput) {
                try { receivingBankInput.removeEventListener('change', receivingBankChangeHandler); } catch (e) { }
                receivingBankChangeHandler = null;
            }
            const oldNode = document.getElementById('receivingBankInput');
            if (oldNode && oldNode.parentNode) oldNode.parentNode.removeChild(oldNode);
            receivingBankInput = null;
            // remove preview
            if (receivingBankInputGroup) {
                const prev = receivingBankInputGroup.querySelector('#receivingBankPreview');
                if (prev && prev.parentNode) prev.parentNode.removeChild(prev);
            }
        }

        if (receivingBankInput) {
            // Gỡ handler cũ nếu có
            if (receivingBankChangeHandler && typeof receivingBankChangeHandler === 'function') {
                try { receivingBankInput.removeEventListener('change', receivingBankChangeHandler); } catch (e) { /* ignore */ }
                receivingBankChangeHandler = null;
            }

            // Tạo hoặc gán preview
            let preview = receivingBankInputGroup ? receivingBankInputGroup.querySelector('#receivingBankPreview') : null;
            if (!preview && receivingBankInputGroup) {
                preview = document.createElement('span');
                preview.id = 'receivingBankPreview';
                receivingBankInputGroup.appendChild(preview);
            }

            if (preview) preview.textContent = receivingBankInput.value || '';

            // Thiết lập handler mới
            receivingBankChangeHandler = function() {
                if (preview) preview.textContent = this.value || '';
            };
            receivingBankInput.addEventListener('change', receivingBankChangeHandler);
        }
    }
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

    // --- Auto-fill: If any enabled field is empty when the user clicks "Tạo ảnh",
    // fill it from the current template's placeholder for that field (absolute isolation).
    if (currentTemplate && currentTemplate.placeholders && currentTemplate.fields) {
        const ph = currentTemplate.placeholders;

        const setIfEmpty = (el, value) => {
            if (!el || !value) return;
            try {
                if (el.tagName === 'SELECT') {
                    // Only set a default if the select currently has no meaningful value
                    if (!el.value || el.value.trim() === '') {
                        // Prefer an option that matches placeholder text; otherwise pick the first non-disabled option
                        const match = Array.from(el.options).find(o => o.value === value && !o.disabled);
                        if (match) el.value = match.value;
                        else {
                            const firstValid = Array.from(el.options).find(o => !o.disabled && o.value.trim() !== '');
                            if (firstValid) el.value = firstValid.value;
                        }
                    }
                } else {
                    if (!el.value || el.value.trim() === '') el.value = value;
                }
            } catch (e) { /* element might not exist or not be an element; ignore */ }
        };

        if (currentTemplate.fields.timeClock) setIfEmpty(timeClockInput, ph.timeClock);
        if (currentTemplate.fields.amount) setIfEmpty(amountInput, ph.amount);
        if (currentTemplate.fields.name) setIfEmpty(nameInput, ph.name);
        if (currentTemplate.fields.bank) setIfEmpty(bankInput, ph.bank);
        if (currentTemplate.fields.account) setIfEmpty(accountInput, ph.account);
        if (currentTemplate.fields.content) setIfEmpty(contentInput, ph.content);
        if (currentTemplate.fields.timeDetail) setIfEmpty(timeDetailInput, ph.timeDetail);
        if (currentTemplate.fields.transactionId) setIfEmpty(transactionIdInput, ph.transactionId);
        if (currentTemplate.fields.traceCode) setIfEmpty(traceCodeInput, ph.traceCode);
        if (currentTemplate.fields.message) setIfEmpty(messageInput, ph.message);

        // receivingBank placeholder: only pick the one that belongs to this template
        if (currentTemplate.fields.receivingBankTECH) setIfEmpty(receivingBankInput, ph.receivingBankTECH);
        else if (currentTemplate.fields.receivingBankTP) setIfEmpty(receivingBankInput, ph.receivingBankTP);
        else if (currentTemplate.fields.receivingBankVP) setIfEmpty(receivingBankInput, ph.receivingBankVP);
    }

    // LẤY GIÁ TRỊ CHỈ KHI TRƯỜNG TỒN TẠI TRONG TEMPLATE (absolute isolation)
    const timeClockText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.timeClock) ? timeClockInput.value.trim() : '';
    const amountText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.amount) ? amountInput.value.trim() : '';
    const nameText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.name) ? nameInput.value.trim() : '';
    const bankText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.bank) ? bankInput.value.trim() : '';
    const accountText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.account) ? accountInput.value.trim() : '';
    const contentText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.content) ? contentInput.value.trim() : '';
    const timeDetailText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.timeDetail) ? timeDetailInput.value.trim() : '';

    // LẤY GIÁ TRƯỜNG MỚI (chỉ nếu template khai báo các field này)
    const transactionIdText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.transactionId) ? (transactionIdInput ? transactionIdInput.value.trim() : '') : '';
    const traceCodeText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.traceCode) ? (traceCodeInput ? traceCodeInput.value.trim() : '') : '';
    const messageText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.message) ? (messageInput ? messageInput.value.trim() : '') : '';
    // Compute receiving bank text for the OUTPUT only (do not change the input preview text)
    let receivingBankText = '';
    if (currentTemplate && currentTemplate.fields && (currentTemplate.fields.receivingBankTP || currentTemplate.fields.receivingBankVP || currentTemplate.fields.receivingBankTECH)) {
        const raw = receivingBankInput ? receivingBankInput.value.trim() : '';
        // Apply techcom-specific mapping: when VP BANK is selected, print the full bank name
        receivingBankText = getReceivingBankOutput(currentTemplateKey, raw);
    }


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
            ctx.drawImage(img, 0, 0); // VẼ ẢNH NỀN

            // --- VẼ CHỮ DỰ TRÊN CẤU HÌNH CỦA MẪU ĐÃ CHỌN ---
            
            // Hàm vẽ chữ linh hoạt (giữ nguyên logic)
            const drawField = (text, config) => {
                if (!text) return; 

                const finalX = config.X || (canvas.width / 2); 
                
                ctx.fillStyle = config.color || currentTemplate.fontColor || '#000000';
                ctx.textAlign = config.textAlign || 'center';
                ctx.font = config.fontSize || currentTemplate.fontStyle;
                
                if (typeof config.spacing === 'number' && config.spacing !== 0) {
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

                    // If applySpacingToAll is set, apply spacing between every adjacent character
                    if (config.applySpacingToAll) {
                        const spacingPerGap = spacing;
                        const gaps = Math.max(0, characters.length - 1);
                        const totalSpacingAdded = spacingPerGap * gaps;

                        totalSpacedWidth = ctx.measureText(text).width + totalSpacingAdded;

                        let startX = finalX;
                        if (config.textAlign === 'center') startX -= totalSpacedWidth / 2;
                        else if (config.textAlign === 'right') startX -= totalSpacedWidth;
                        currentX = startX;

                        characters.forEach((char, index) => {
                            ctx.fillText(char, currentX, config.Y);
                            const width = charWidths[index];
                            // always add the defined spacing between characters (can be negative)
                            const charSpacing = (index < characters.length - 1) ? spacingPerGap : 0;
                            currentX += width + charSpacing;
                        });
                    } else {
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
                    }
                } else {
                    ctx.fillText(text, finalX, config.Y);
                }
            }; // HẾT HÀM drawField

            if (currentTemplate.fields) { // Logic vẽ cho các mẫu dùng 'fields'
                
                // VẼ CÁC TRƯỜNG DỮ LIỆU CHUNG
                if (currentTemplate.fields.timeClock) drawField(timeClockText, currentTemplate.fields.timeClock);
                if (currentTemplate.fields.amount) drawField(amountText, currentTemplate.fields.amount);
                if (currentTemplate.fields.name) drawField(nameText, currentTemplate.fields.name);
                
                // VẼ BANK CHỦ TK
                const bankToDraw = BANK_DETAILS[bankText] ? '' : bankText; 
                if (currentTemplate.fields.bank) drawField(bankToDraw, currentTemplate.fields.bank);


                if (currentTemplate.fields.account) {
                    // Conditional override: When using the TP BANK template and the chosen bank
                    // is TECHCOM BANK, draw the account field at the requested coordinates
                    // X=1000, Y=1828 instead of the default configured position.
                    if (currentTemplateKey === 'tpbank' && bankText === 'TECHCOM BANK') {
                        const overriddenAccountConfig = Object.assign({}, currentTemplate.fields.account, { X: 860, Y: 1828 });
                        drawField(accountText, overriddenAccountConfig);
                    } else {
                        drawField(accountText, currentTemplate.fields.account);
                    }
                }
                
                // 🔥 VẼ NGÂN HÀNG NHẬN (SỬ DỤNG KEY ĐỘC LẬP)
                if (currentTemplate.fields.receivingBankTP) drawField(receivingBankText, currentTemplate.fields.receivingBankTP);
                if (currentTemplate.fields.receivingBankVP) drawField(receivingBankText, currentTemplate.fields.receivingBankVP);
                if (currentTemplate.fields.receivingBankTECH) drawField(receivingBankText, currentTemplate.fields.receivingBankTECH);

                
                // XỬ LÝ TRƯỜNG NỘI DUNG/LỜI NHẮN
                const contentOrMessageText = contentText || messageText;
                
                if (currentTemplate.fields.content) drawField(contentText, currentTemplate.fields.content);
                if (currentTemplate.fields.message) drawField(messageText, currentTemplate.fields.message);


                if (currentTemplate.fields.timeDetail) drawField(timeDetailText, currentTemplate.fields.timeDetail);
                
                // VẼ TRƯỜNG MÃ GIAO DỊCH VÀ MÃ TRA SOÁT
                if (currentTemplate.fields.transactionId) drawField(transactionIdText, currentTemplate.fields.transactionId);
                if (currentTemplate.fields.traceCode) drawField(traceCodeText, currentTemplate.fields.traceCode);

            } else {
                // Logic vẽ cũ cho các mẫu không có cấu hình 'fields' (Nếu còn)
                ctx.fillStyle = currentTemplate.fontColor; 
                ctx.textAlign = 'center';
                ctx.font = currentTemplate.fontStyle; 
                if(nameInput.value) ctx.fillText(nameInput.value, canvas.width / 2, currentTemplate.nameY);
                
                const roleFontSize = parseInt(currentTemplate.fontStyle.match(/\d+/)[0]) - 20;
                const roleFontFamily = currentTemplate.fontStyle.replace(/\d+/g, '').trim();
                ctx.font = `${roleFontSize}px ${roleFontFamily}`;
                if(amountInput.value) ctx.fillText(amountInput.value, canvas.width / 2, currentTemplate.roleY);
            }

            // LOGIC ĐÍNH KÈM LOGO: Chỉ vẽ logo nguồn nếu template hiện tại định nghĩa trường 'bank'
            const selectedBankDetail = (currentTemplate.fields && currentTemplate.fields.bank) ? BANK_DETAILS[bankText] : null;

            if (selectedBankDetail) {
                const logoImg = new Image();
                logoImg.src = selectedBankDetail.PATH;
                
                logoImg.onload = function() {
                    const { X, Y, W, H } = selectedBankDetail.COORDS;
                    ctx.drawImage(logoImg, X, Y, W, H);
                    exportImage(currentTemplate.title, nameText);
                };
                logoImg.onerror = function() {
                    alert(`Lỗi: Không tìm thấy file logo ${selectedBankDetail.PATH}!`);
                    exportImage(currentTemplate.title, nameText); 
                };
            } else {
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


// LOGIC THÊM: Kích hoạt nút Tạo Ảnh khi nhấn ENTER
document.getElementById('inputResultScreen').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') { 
        e.preventDefault();
        document.getElementById('generateBtn').click(); 
    }
});

// BACKUP: một listener trên document để đảm bảo phím Enter luôn kích hoạt Tạo Ảnh
// khi màn hình input đang hiển thị, phòng trường hợp sự kiện keydown không bubble về #inputResultScreen
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const inputScreen = document.getElementById('inputResultScreen');
        if (inputScreen && inputScreen.style.display !== 'none') {
            e.preventDefault();
            // bảo đảm nút tồn tại trước khi click
            const btn = document.getElementById('generateBtn');
            if (btn) btn.click();
        }
    }
});