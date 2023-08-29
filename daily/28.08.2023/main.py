# Easy | Stack
# Идея задачи максимально легкая, реализация не вызвала проблем

import typing as tp


# Beats Speed=94, Space=32
class MyStack:
    def __init__(self):
        self.list: tp.List[int] = []

    def push(self, x: int) -> None:
        self.list.append(x)

    def pop(self) -> int:
        return self.list.pop()

    def top(self) -> int:
        return self.list[-1]

    def empty(self) -> bool:
        return len(self.list) == 0
