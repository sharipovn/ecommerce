def is_askue(meter):
    if len(meter) in (9, 10) and meter[:3] == 'EX-':
        return 1
    elif len(meter) == 12:
        if meter[:2] == '20' and meter[2:4] in ('15', '16', '17', '18', '19', '20', '21', '22'):
            return 1
        elif meter[:2] == '11' and meter[2:3] in ('1', '3', '4', '5'):
            return 1
        elif meter[:2] == '02' and meter[2:3] in ('1', '3', '4'):
            return 1
        elif meter[:2] == '12' and meter[2:3] in ('1', '3', '4'):
            return 1
        else:
            return 0
    else:
        return 0

# Example usage:
meter_value = '59123456789'
result = is_askue(meter_value)
print(result)
