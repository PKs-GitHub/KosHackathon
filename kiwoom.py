# -*- coding: euc-kr -*-

import sys
import io

from pykiwoom.kiwoom import *

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

print("")

kiwoom = Kiwoom()
kiwoom.CommConnect(block=True)
print("Blocking Login Success!")

# aa
kiwoom.GetConditionLoad()

#
conditions = kiwoom.GetConditionNameList()

#
condition_index = conditions[0][0]
condition_name = conditions[0][1]

condition_index = 4
condition_name = "키움-실적호전주"
# tmp = str(condition_name, encoding="cp949")

codes = kiwoom.SendCondition("0101", condition_name, condition_index, 1)

for code in codes:
    name = kiwoom.GetMasterCodeName(code)
    print(name)
