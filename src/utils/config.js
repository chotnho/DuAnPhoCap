
export const NGAYSINH = [];

for (let i = 1; i <= 31; i++) {
    NGAYSINH.push({ id: i, value: i , name: i});
}

export const THANGSINH = []

for (let i = 1; i <= 12; i++) {
    THANGSINH.push({ id: i, value: i , name: i});
}

export const GIOITINH = [
    {id: 1, value:'Nam', name: 'Nam'},
    {id: 2, value:'Nữ', name: 'Nữ'}
]

export const HOANCANHDB = [
    {id: 1, value:'chuyển đến', name: 'chuyển đến'},
    {id: 1, value:'chuyển đi', name: 'chuyển đi'},
    {id: 1, value:'chết', name: 'chết'},
]

export function fortmatPhanTram(number) {
  
    return parseFloat(number.toFixed(2));
  }