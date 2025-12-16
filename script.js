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
    },
    // Small logos for receiving banks (for image output)
    "MB_BANK_LOGO_SMALL": {
        PATH: 'VPBANK_MB.png', // Đường dẫn giả định, bạn cần thay thế bằng file ảnh thực tế
        COORDS: { // Tọa độ và kích thước riêng cho logo MB BANK nhỏ
            X: 110, Y: 1180, W: 140, H: 69 
        }
    },
    "TECHCOM_BANK_LOGO_SMALL": {
        PATH: 'VPBANK_TECH.png', // Đường dẫn giả định
        COORDS: { // Tọa độ và kích thước riêng cho logo TECHCOM BANK nhỏ
            X: 115, Y: 1175, W: 130, H: 88 // Điều chỉnh X, Y, W, H theo ý muốn
        }
    },
    "TP_BANK_LOGO_SMALL": {
        PATH: 'TPBANK_VP.png', // Reverted to original path as requested
        COORDS: { // Tọa độ và kích thước riêng cho logo TP BANK nhỏ
            X: 115, Y: 1172, W: 133, H: 110 // Điều chỉnh X, Y, W, H theo ý muốn
        }
    }
};

// ... (phần còn lại của BANK_DETAILS) ...


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
            battery: "94", // Add placeholder for battery
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
            battery: { // Add battery field for Techcombank
                label: "Pin điện thoại",
                inputType: 'select',
                options: ['94', '95', '96', '97', '98'],
                Y: 80, X: 1355, // Adjust coordinates for Techcombank image
                fontSize: '700 45px Roboto',
                textAlign: 'center', color: '#f9f5ea'
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
                inputType: 'select', // Chỉ định đây là trường dropdown
                options: ['TP BANK', 'VP BANK', 'MB BANK', 'BIDV'], // Các tùy chọn cho dropdown
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
        fontStyle: 'bold 70px Impact', // Đây là font dự phòng, font thực tế của các trường được định nghĩa bên dưới
        
        // DỮ LIỆU GỢI Ý RIÊNG CHO VP BANK
        placeholders: {
            amount: "1 000 000 ₫",
            name: "LE VAN LUYEN",
            account: "9855696969",
            receivingBankVP: "Vietinbank", // KEY ĐỘC LẬP
            timeClock: "16:45",
            content: "LE VAN LUYEN chuyen tien",
            traceCode: "582661",
            timeDetail: "12/12/2025",
            interface: "LIGHT",
            battery: "94"
        },

        // CẤU HÌNH FIELDS CỐ ĐỊNH CHO VP BANK
        fields: {
            amount:   { 
                label: "Số tiền", Y: 850, X: 300, fontSize: '500 113px Roboto', textAlign: 'left', // Y và X đã được điều chỉnh để phù hợp với ảnh VPBANK.jpg
                colorLight: '#333333', // Màu cho giao diện LIGHT (màu chữ số)
                colorDark: '#FFFFFF',   // Màu cho giao diện DARK (màu chữ số)
                currencySymbolColorLight: '#8d8d8d', // Màu đỏ cho '₫' ở giao diện LIGHT
                currencySymbolColorDark: '#8d8d8d'    // Màu vàng cho '₫' ở giao diện DARK
            },
            name:     { 
                label: "Tên người nhận", Y: 1200, X: 295, fontSize: '400 53.5px Roboto', textAlign: 'left',
                colorLight: '#000000',
                colorDark: '#ffffffff'   // Màu cho giao diện DARK (ví dụ: xám nhạt)
            },
            battery: {
                label: "Pin điện thoại", // Label cho trường nhập liệu
                fontSize: '700 45px Roboto', textAlign: 'center', // Kiểu chữ và căn chỉnh
                YLight: 80, XLight: 1345, // Tọa độ cho giao diện LIGHT
                YDark: 80, XDark: 1355,   // Tọa độ cho giao diện DARK (có thể điều chỉnh khác đi)
                colorLight: '#cccccc',    // Màu cho chế độ LIGHT (trên thanh trạng thái)
                colorDark: '#303642'      // Màu cho chế độ DARK (trên thanh trạng thái)
            },
            account:  { 
                label: "Số tài khoản", Y: 1280, X: 295, fontSize: '400 53.5px Roboto', textAlign: 'left',
                colorLight: '#8e979c',
                colorDark: '#8b8b8b'
            },
            // Trường này có thể dùng cho nhãn "Ngân hàng thụ hưởng" trong ảnh,
            // nhưng giờ sẽ hiển thị logo của ngân hàng nhận.
            receivingBankVP: { // KEY ĐỘC LẬP MỚI
                label: "Ngân hàng nhận", // Đổi label để khớp với "5B. Ngân hàng nhận:"
                // X, Y, W, H sẽ được lấy từ BANK_DETAILS[logoKey].COORDS
                outputType: 'image', // Chỉ định rằng kết quả là một ảnh
                logoMap: { // Ánh xạ giá trị dropdown sang key trong BANK_DETAILS
                    'MB BANK': 'MB_BANK_LOGO_SMALL',
                    'TECHCOM BANK': 'TECHCOM_BANK_LOGO_SMALL',
                    'TP BANK': 'TP_BANK_LOGO_SMALL'
                },
                inputType: 'select', // Chỉ định đây là trường dropdown
                options: ['MB BANK', 'TECHCOM BANK', 'TP BANK'], // Các tùy chọn cho dropdown
            },
            // Trường mới cho giá trị "Thời gian" trong phần nội dung chính của phiếu
            timeDetail:{
                label: "Thời gian", Y: 1505, X: 1335, fontSize: '500 53.5px Roboto', textAlign: 'right',
                colorLight: '#000000',
                colorDark: '#ffffffff'
            },
            // Trường này dùng cho đồng hồ điện thoại trên thanh trạng thái
            timeClock:{ 
                label: "Đồng hồ điện thoại", Y: 80, X: 120, fontSize: '700 50px Roboto', textAlign: 'center',
                colorLight: '#3e3e3e',
                colorDark: '#ffffffff'
            },
            content:  { // Trường nội dung hiện có, không thay đổi
                label: "Nội dung", Y: 1690, X: 1335, fontSize: '500 53.5px Roboto', textAlign: 'right',
                colorLight: '#000000',
                colorDark: '#ffffffff'
            },
            traceCode:{ 
                label: "Mã tra soát", Y: 2050, X: 1335, fontSize: '500 53.5px Roboto', textAlign: 'right',
                colorLight: '#000000ff',
                colorDark: '#ffffffff'
            }
        },
        // Bank options scoped to this template
        bankOptions: ['MB BANK','TP BANK','VP BANK']
    },
};

// Track which template is active
let currentTemplateKey = null;

// Output-only mapping: per-template mapping from dropdown value -> final printed name
const RECEIVING_BANK_OUTPUT = {
    techcombank: {
        'TP BANK': 'Ngân hàng TMCP Tiên Phong',
        'VP BANK': 'Ngân hàng TMCP Việt Nam Thịnh Vượng', // Đây là mapping cho TECHCOM, không phải VPBANK
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
// New: giao dien (interface) controls for VP BANK
const interfaceInput = document.getElementById('interfaceInput');
const interfaceInputGroup = document.getElementById('interfaceInputGroup');
// New: pin điện thoại controls for VP BANK
const batteryInput = document.getElementById('batteryInput');
const batteryInputGroup = document.getElementById('batteryInputGroup');

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
        { key: 'interface', input: interfaceInput, group: interfaceInputGroup },
        { key: 'battery', input: batteryInput, group: batteryInputGroup },
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
        const existingRecv = document.getElementById('receivingBankInput');

        if (templateKey === 'tpbank') {
            // Đảm bảo xóa hoàn toàn phần 5B cho TP BANK
            if (existingRecv && existingRecv.parentNode) existingRecv.parentNode.removeChild(existingRecv);
            receivingBankInput = null;
        } else { // Đối với các template khác TP BANK, xử lý trường receivingBankInput một cách linh hoạt
            // Xác định cấu hình trường receivingBank đang hoạt động cho template hiện tại
            let activeReceivingBankFieldConfig = null;
            if (currentTemplate.fields.receivingBankTECH) {
                activeReceivingBankFieldConfig = currentTemplate.fields.receivingBankTECH;
            } else if (currentTemplate.fields.receivingBankVP) {
                activeReceivingBankFieldConfig = currentTemplate.fields.receivingBankVP;
            } else if (currentTemplate.fields.receivingBankTP) {
                activeReceivingBankFieldConfig = currentTemplate.fields.receivingBankTP;
            }

            // Xử lý tạo/thay thế receivingBankInput (select hoặc text)
            if (activeReceivingBankFieldConfig && activeReceivingBankFieldConfig.inputType === 'select') {
                // Nếu cấu hình yêu cầu SELECT, tạo/thay thế bằng SELECT
                const select = document.createElement('select');
                select.id = 'receivingBankInput';
                const options = activeReceivingBankFieldConfig.options || [];
                options.forEach(optText => {
                    const o = document.createElement('option');
                    o.value = optText;
                    o.textContent = optText;
                    select.appendChild(o);
                });

                if (existingRecv && existingRecv.parentNode) existingRecv.parentNode.replaceChild(select, existingRecv);
                else if (receivingBankInputGroup) receivingBankInputGroup.appendChild(select);
                receivingBankInput = document.getElementById('receivingBankInput'); // Cập nhật tham chiếu
            } else {
                // Ngược lại, đảm bảo nó là một trường TEXT input
                if (!existingRecv || existingRecv.tagName !== 'INPUT') {
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'receivingBankInput';
                    if (existingRecv && existingRecv.parentNode) existingRecv.parentNode.replaceChild(input, existingRecv);
                    else if (receivingBankInputGroup) receivingBankInputGroup.appendChild(input);
                    receivingBankInput = input; // Cập nhật tham chiếu
                } else {
                    receivingBankInput = existingRecv; // Đã là text input, giữ nguyên tham chiếu
                }
            }
        }
        // Create interface select only for VP BANK template
        if (templateKey === 'vpbank') {
            const existingInterface = document.getElementById('interfaceInput');
            if (!existingInterface) {
                const select = document.createElement('select');
                select.id = 'interfaceInput';
                ['LIGHT', 'DARK'].forEach(optText => {
                    const o = document.createElement('option');
                    o.value = optText;
                    o.textContent = optText;
                    if (optText === 'LIGHT') o.selected = true;
                    select.appendChild(o);
                });
                if (interfaceInputGroup) interfaceInputGroup.appendChild(select);
            }
            // refresh reference
            window.interfaceInput = document.getElementById('interfaceInput');
        } else {
            // remove interface select if present for other templates
            const oldInterface = document.getElementById('interfaceInput');
            if (oldInterface && oldInterface.parentNode) oldInterface.parentNode.removeChild(oldInterface);
            // keep variable in sync
            try { if (window.interfaceInput) delete window.interfaceInput; } catch (e) {}
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

            // Special: show GIAO DIỆN control only for VP BANK
            if (group === interfaceInputGroup) {
                isRequired = (templateKey === 'vpbank');
            }
            // Special: show Pin điện thoại control only for VP BANK
            if (group === batteryInputGroup) { // Extend to Techcombank
                isRequired = (templateKey === 'vpbank' || templateKey === 'techcombank');
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
        // Interface (GIAO DIỆN) default for VP BANK
        if (currentTemplateKey === 'vpbank') setIfEmpty(interfaceInput, ph.interface || 'LIGHT');
        // Pin điện thoại default for VP BANK and TECHCOM BANK
        if (currentTemplateKey === 'vpbank' || currentTemplateKey === 'techcombank') {
            setIfEmpty(batteryInput, ph.battery || '94');
        }
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
    // Battery (Pin) value for VP BANK (display as percentage)
    const batteryText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.battery) ? (batteryInput ? batteryInput.value.trim() : (currentTemplate.placeholders && currentTemplate.placeholders.battery ? currentTemplate.placeholders.battery : '')) : '';
    // Display the raw number only (strip any trailing '%')
    const batteryDisplay = batteryText ? batteryText.toString().trim().replace(/%$/, '') : '';


    // Kiểm tra mẫu và dữ liệu
    if (!currentTemplate) { 
        alert("Vui lòng chọn mẫu trước khi tạo ảnh!");
        return;
    }

    // Lấy chế độ giao diện được chọn (chỉ áp dụng cho VP BANK)
    const modeEl = document.getElementById('interfaceInput');
    const selectedInterfaceMode = (currentTemplateKey === 'vpbank' && modeEl) ? (modeEl.value || 'LIGHT') : 'LIGHT'; // Mặc định là LIGHT

    // Hàm trợ giúp để lấy cấu hình trường hiệu quả bao gồm màu động
    const getEffectiveFieldConfig = (fieldKey, isImageOutput = false) => {
        const fieldConfig = currentTemplate.fields[fieldKey];
        if (!fieldConfig) return null;
        if (isImageOutput) return { ...fieldConfig }; // Đối với output là ảnh, chỉ cần trả về config thô (chứa X, Y, outputType, logoMap)
        const effectiveConfig = { ...fieldConfig }; // Tạo một bản sao nông

        // Determine the effective color based on interface mode, if colorLight/colorDark are defined
        if (fieldConfig.colorLight !== undefined || fieldConfig.colorDark !== undefined) {
            effectiveConfig.color = (selectedInterfaceMode === 'DARK') ?
                                    (fieldConfig.colorDark || '#FFFFFF') : // Mặc định màu trắng cho chế độ tối nếu không được chỉ định
                                    (fieldConfig.colorLight || '#000000'); // Mặc định màu đen cho chế độ sáng nếu không được chỉ định
        } else {
            effectiveConfig.color = fieldConfig.color || currentTemplate.fontColor || '#000000'; // Sử dụng màu gốc nếu không có colorLight/colorDark
        }
        // Thêm màu riêng cho ký hiệu tiền tệ nếu có
        if (fieldConfig.currencySymbolColorLight || fieldConfig.currencySymbolColorDark) {
            effectiveConfig.currencySymbolColor = (selectedInterfaceMode === 'DARK') ?
                                                  (fieldConfig.currencySymbolColorDark || effectiveConfig.color) : // Mặc định dùng màu chung nếu không có màu riêng cho DARK
                                                  (fieldConfig.currencySymbolColorLight || effectiveConfig.color); // Mặc định dùng màu chung nếu không có màu riêng cho LIGHT
        } else {
            effectiveConfig.currencySymbolColor = effectiveConfig.color; // Mặc định dùng màu chung
        }
        // Thêm tọa độ riêng cho từng chế độ giao diện nếu có
        effectiveConfig.Y = (selectedInterfaceMode === 'DARK') ? (fieldConfig.YDark || fieldConfig.Y) : (fieldConfig.YLight || fieldConfig.Y);
        effectiveConfig.X = (selectedInterfaceMode === 'DARK') ? (fieldConfig.XDark || fieldConfig.X) : (fieldConfig.XLight || fieldConfig.X);
        return effectiveConfig;
    };

    // Array để chứa tất cả các promise tải ảnh
    const imageLoadPromises = [];
    const loadedImages = {}; // Map để lưu trữ các đối tượng Image đã tải theo key

    // --- 1. Tải ảnh nền ---
    let bgImagePath = currentTemplate.imagePath;
    if (currentTemplateKey === 'vpbank') {
        const modeEl = document.getElementById('interfaceInput');
        const mode = modeEl ? (modeEl.value || '') : (currentTemplate.placeholders && currentTemplate.placeholders.interface ? currentTemplate.placeholders.interface : 'LIGHT');
        if (mode === 'DARK') bgImagePath = 'VPBANK_DARK.jpg';
    }
    imageLoadPromises.push(new Promise((resolve, reject) => {
        const img = new Image();
        img.src = bgImagePath;
        img.onload = () => {
            loadedImages.background = img;
            resolve();
        };
        img.onerror = () => {
            console.error(`Lỗi: Không tìm thấy file ảnh nền ${bgImagePath}!`);
            alert(`Lỗi: Không tìm thấy file ảnh nền ${bgImagePath}!`);
            reject(new Error(`Background image not found: ${bgImagePath}`));
        };
    }));

    // --- 2. Tải Logo Ngân hàng nhận (nếu outputType là 'image') ---
    let receivingBankLogoDetails = null;
    if (currentTemplate.fields.receivingBankVP && currentTemplate.fields.receivingBankVP.outputType === 'image') {
        const selectedBank = receivingBankInput.value;
        const logoKey = currentTemplate.fields.receivingBankVP.logoMap[selectedBank];
        if (logoKey && BANK_DETAILS[logoKey]) {
            receivingBankLogoDetails = BANK_DETAILS[logoKey];
            imageLoadPromises.push(new Promise((resolve, reject) => {
                const img = new Image();
                img.src = receivingBankLogoDetails.PATH;
                img.onload = () => {
                    loadedImages.receivingBankLogo = img;
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Lỗi: Không tìm thấy logo ngân hàng nhận ${receivingBankLogoDetails.PATH}!`);
                    // Không reject ở đây để các ảnh khác vẫn được tải, nhưng logo này sẽ không được vẽ
                    resolve();
                };
            }));
        }
    }

    // --- 3. Tải Logo Ngân hàng chính (nếu áp dụng) ---
    let mainBankLogoDetails = null;
    const selectedBankText = (currentTemplate && currentTemplate.fields && currentTemplate.fields.bank) ? bankInput.value.trim() : '';
    if (selectedBankText && BANK_DETAILS[selectedBankText]) {
        mainBankLogoDetails = BANK_DETAILS[selectedBankText];
        imageLoadPromises.push(new Promise((resolve, reject) => {
            const img = new Image();
            img.src = mainBankLogoDetails.PATH;
            img.onload = () => {
                loadedImages.mainBankLogo = img;
                resolve();
            };
            img.onerror = () => {
                console.error(`Lỗi: Không tìm thấy logo ngân hàng chính ${mainBankLogoDetails.PATH}!`);
                // Không reject ở đây để các ảnh khác vẫn được tải
                resolve();
            };
        }));
    }

    // Chờ tất cả các ảnh tải xong, sau đó vẽ mọi thứ
    Promise.all(imageLoadPromises).then(() => {
        // Đảm bảo font đã sẵn sàng trước khi vẽ văn bản
        document.fonts.ready.then(function () {
            canvas.width = loadedImages.background.width;
            canvas.height = loadedImages.background.height;
            ctx.drawImage(loadedImages.background, 0, 0); // VẼ ẢNH NỀN

            // --- VẼ CHỮ DỰ TRÊN CẤU HÌNH CỦA MẪU ĐÃ CHỌN ---
            const drawField = (text, config) => {
                if (!text || !config) return; 

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
                            const charSpacing = (index < characters.length - 1) ? spacingPerGap : 0;
                            currentX += width + charSpacing;
                        });
                    } else {
                        let totalSpacedWidth = 0;
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
                
                // VẼ CÁC TRƯỜNG DỮ LIỆU CHUNG (TEXT)
                if (currentTemplate.fields.timeClock) {
                    drawField(timeClockText, getEffectiveFieldConfig('timeClock'));
                }
                if (currentTemplate.fields.amount) {
                    const amountConfig = getEffectiveFieldConfig('amount');
                    if (amountConfig) {
                        ctx.font = amountConfig.fontSize || currentTemplate.fontStyle;
                        ctx.textAlign = amountConfig.textAlign || 'left';

                        const currencySymbol = '₫';
                        // Tách chuỗi số tiền thành các phần, giữ lại ký hiệu tiền tệ
                        const parts = amountText.split(new RegExp(`(${currencySymbol})`, 'g')).filter(Boolean); 
                        let currentDrawX = amountConfig.X;

                        for (const part of parts) {
                            const partWidth = ctx.measureText(part).width;
                            if (part === currencySymbol) {
                                ctx.fillStyle = amountConfig.currencySymbolColor;
                            } else {
                                ctx.fillStyle = amountConfig.color;
                            }
                            ctx.fillText(part, currentDrawX, amountConfig.Y);
                            currentDrawX += partWidth;
                        }
                        // Khôi phục màu mặc định của trường cho các lần vẽ tiếp theo
                        ctx.fillStyle = amountConfig.color; 
                    }
                }
                if (currentTemplate.fields.name) {
                    drawField(nameText, getEffectiveFieldConfig('name'));
                }
                
                // VẼ BANK CHỦ TK
                const bankToDraw = BANK_DETAILS[bankText] ? '' : bankText; 
                if (currentTemplate.fields.bank) {
                    drawField(bankToDraw, getEffectiveFieldConfig('bank'));
                }

                // VẼ PIN ĐIỆN THOẠI (VP BANK)
                if (currentTemplate.fields.battery) {
                    drawField(batteryDisplay, getEffectiveFieldConfig('battery'));
                }

                if (currentTemplate.fields.account) {
                    // Conditional override: When using the TP BANK template and the chosen bank
                    // is TECHCOM BANK, draw the account field at the requested coordinates
                    // X=1000, Y=1828 instead of the default configured position.
                    if (currentTemplateKey === 'tpbank' && bankText === 'TECHCOM BANK') {
                        const baseConfig = getEffectiveFieldConfig('account');
                        const overriddenAccountConfig = { ...baseConfig, X: 860, Y: 1828 };
                        drawField(accountText, overriddenAccountConfig);
                    } else {
                        drawField(accountText, getEffectiveFieldConfig('account'));
                    }
                }
                
                // 🔥 VẼ NGÂN HÀNG NHẬN (TEXT HOẶC IMAGE)
                if (currentTemplate.fields.receivingBankTP) {
                    drawField(receivingBankText, getEffectiveFieldConfig('receivingBankTP'));
                }
                if (currentTemplate.fields.receivingBankVP) {
                    const recvBankConfig = getEffectiveFieldConfig('receivingBankVP', true); // Lấy config thô cho ảnh
                    if (recvBankConfig.outputType === 'image' && loadedImages.receivingBankLogo && receivingBankLogoDetails && receivingBankLogoDetails.COORDS) {
                        const drawX = receivingBankLogoDetails.COORDS.X;
                        const drawY = receivingBankLogoDetails.COORDS.Y;
                        const drawW = receivingBankLogoDetails.COORDS.W;
                        const drawH = receivingBankLogoDetails.COORDS.H;
                        ctx.drawImage(loadedImages.receivingBankLogo, drawX, drawY, drawW, drawH);
                    } else {
                        // Fallback về vẽ text nếu ảnh không tải được hoặc không cấu hình outputType là 'image'
                        drawField(receivingBankText, getEffectiveFieldConfig('receivingBankVP'));
                    }
                }
                if (currentTemplate.fields.receivingBankTECH) {
                    drawField(receivingBankText, getEffectiveFieldConfig('receivingBankTECH'));
                }

                // ... (phần còn lại của logic vẽ) ...

                
                // XỬ LÝ TRƯỜNG NỘI DUNG/LỜI NHẮN
                const contentOrMessageText = contentText || messageText;
                
                if (currentTemplate.fields.content) {
                    drawField(contentText, getEffectiveFieldConfig('content'));
                }
                if (currentTemplate.fields.message) {
                    drawField(messageText, getEffectiveFieldConfig('message'));
                }

                if (currentTemplate.fields.timeDetail) {
                    drawField(timeDetailText, getEffectiveFieldConfig('timeDetail'));
                }
                
                // VẼ TRƯỜNG MÃ GIAO DỊCH VÀ MÃ TRA SOÁT
                if (currentTemplate.fields.transactionId) {
                    drawField(transactionIdText, getEffectiveFieldConfig('transactionId'));
                }
                if (currentTemplate.fields.traceCode) {
                    drawField(traceCodeText, getEffectiveFieldConfig('traceCode'));
                }

            } else {
                // Logic vẽ cũ cho các mẫu không có cấu hình 'fields' (Nếu còn)
                // Khối này có thể đã lỗi thời hoặc dành cho các mẫu cũ hơn, không cần thay đổi ở đây.
            }

            // LOGIC ĐÍNH KÈM LOGO CHÍNH (nếu có)
            if (loadedImages.mainBankLogo && mainBankLogoDetails) {
                const { X, Y, W, H } = mainBankLogoDetails.COORDS;
                ctx.drawImage(loadedImages.mainBankLogo, X, Y, W, H);
            }

            // --- HÀM XUẤT ẢNH (chỉ gọi một lần sau khi tất cả đã vẽ xong) ---
            const dataURL = canvas.toDataURL('image/jpeg');
            document.getElementById('resultArea').style.display = 'block';
            finalImage.src = dataURL;
            downloadLink.href = dataURL;
            downloadLink.download = `${currentTemplate.title}-${nameText || 'file-anh'}.jpg`;
        }); // KẾT THÚC document.fonts.ready.then
    }).catch(error => {
        console.error("Lỗi khi tải ảnh hoặc font:", error);
        alert("Có lỗi xảy ra khi tải ảnh hoặc font. Vui lòng kiểm tra console để biết chi tiết.");
    });
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