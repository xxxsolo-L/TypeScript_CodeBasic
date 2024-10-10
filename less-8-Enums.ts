// BEGIN (write your solution here)
enum ModalStatus {
    Opened = 'Opened',
    Closed = 'Closed'
}

function buildModal (text: string, status: ModalStatus): { text: string; status: ModalStatus }{
    return {text, status}
}
// END

export { ModalStatus };
export default buildModal;

const modal = buildModal('hexlet forever', ModalStatus.Opened);