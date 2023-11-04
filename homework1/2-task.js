// towersOfHanoi(disks) = 2^(disks - 1) + 2^(disks-2) ... + 2^(0)
function towersOfHanoi(disks) {
    if (disks !== 1) {
        return 2 ** (disks - 1) + towersOfHanoi(disks - 1)
    } else {
        return 1;
    }
}

// towersOfHanoi(disks) = 2 * towersOfHanoi(disks - 1) + 1
function towersOfHanoi2(disks) {
    if (disks !== 1) {
        return 2 * towersOfHanoi2(disks - 1) + 1;
    } else {
        return 1;
    }
}