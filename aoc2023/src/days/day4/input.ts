const input = `
Card   1: 57 76 72 11  8 28 15 38 54 46 | 77 87 71 98 40  7 84 43 61 64  5 50 19 83 79 99 36 47  4 95 30 44 37 55 26
Card   2: 44 69 14 83 54 48 21  6 20 26 | 80 26 86  3  9  4 62 34 15 87 60 88 90 29 65 46 92 73 24 12 40 10 99 37 74
Card   3: 15 60 63 84 20 93 36 39 17 19 | 68 80 17 91 20 84 69 72 15 39  5 61 74 99 60 85 19 45 24 79 53 36  7 63 93
Card   4: 22 74 83 58 88 46  7 52 84  5 | 75 20 95  8 37 56 31 42 73 43 40 48  4 28 99 45 90 63 81 93 68 50 46 30  7
Card   5:  4 97 41 50 32 26 68 84  5 11 | 91 70 87  4 88 13 48 51 32 34 38 82 86 11  1 50 40 43 28  5 61 89 84 41 37
Card   6: 79 97 39 26 57 69 38 87 60 44 | 22 92 80 38 27 66 54  2  9 62  3  4 71 99 24 97 14  7 93 28 53 50 77 68 73
Card   7: 73 91 51 23 90 67 19 81 50 12 |  4 76 97 64 19 85 31  3 74 12 23 60 20 68 52 39 43 65 37 63 40 59 99 80  6
Card   8: 23 64 38 82 68 79 49 56  5 76 | 68 25 64 30 40 52 16 53 95 96 85  9  4  7 26 80 62 67 73 35 32 44 90 69 93
Card   9: 75 87 69 31  8 11 89 49 95 24 | 35 26 68 69 42 66 37 77 25 45 75 72 38 50 27 24 32 46 11 10 14 95 62  7 86
Card  10: 37 25 47 36 57 81 44  6 79 98 | 67 34 86 70 39 97 80 69 27 17  7 50 99 84 45 32 49 53 15 95 19 18 47 37 41
Card  11: 87 98 16 76 21 53  8 42 40 75 | 21  7 89 85 65 30 32 19 68 22 64 82 48 62 39 46  4 57 77 18 55 24 34 29 67
Card  12: 60 11 44 35  9 56 93 91 15 32 | 31 45 37 63 26 12 15 14 48 92 81  1 97 65 29 95 57 77 99 93 27 25 58 66 61
Card  13: 25 75  5 60 47 83  8 37  2 43 | 52 30 68 13  1 92 89 63 78 57 87 75 28 82 59 46 33  3 65 41 47 69 21  2 96
Card  14: 64 44 89 88  1 38 20 99  9 81 | 71 68 91 21 92 75 49 22 27 12  9 26 57 13 66 45 40 37 16  4 44 90 98 85 61
Card  15: 16 56 91 62 12 83 25  3 70 61 | 81 55 73 96 13  7 67 99 88 90 87 48 83 35 19 97  9 31 20 49 38 44 41 45  5
Card  16: 78 68 81 18 76 41 88 45 24 87 | 59 84 67 36 33 57 42 32 11 74 65 31 54 46 72 39 98 40 16 49 79 19  3 44 22
Card  17: 84 11 48 66 54 86 28  4 45 23 |  4 54 42 62 81  8 92 45 47 66 84 48 18 72 28 86 23 34  3 24 73 82 96 11 59
Card  18: 46 40 41 22 75 92 68 10 52  3 | 84 73  9 22  7 19  3 65 32  6 99 77 97 63 62 59 57 17  8 68 91 28 39  4 41
Card  19: 19 57 22 85 75 69 50 62 65 61 | 35 24 50 47 74 97 61 27 66 57 77 75 22 30 70 41 62 69 85 58 81 65 19 91 63
Card  20: 18 13 96 41 20 44 62 97 57 52 | 18 59 96 40 23 58 20 57 41 97 44 62 75 54 85 78 94 52 64 34 37 45 84 13 53
Card  21: 34  3 13 85 81 19 37 97 29 91 |  9 97 52  3 35 48 24 34 17 50 21 71 57 36 94 82 19  4 14 83 98 37 80 91 59
Card  22: 18 14 95 74 23 71 31 83 51 57 | 94 14 63 18 16 73 57 31  5 23 51 69 85 45 70 35 74 49 79 27 40 95 83 13 71
Card  23: 54 12 52 31 58 93  9 45 27 64 | 48 54 93 12 44 64 56 83 35 94 33  4 58 89  8 45 27  1 86 90 52 31 19 57  9
Card  24: 56 75 17 67 59 37 76 94 25 36 | 24 14 56 53 82 35 92 96 17 34 25  1 16 86 41 95 64 45 38 63 31 18 80 33 66
Card  25: 32 22 47 24 80 92 96 67  5 26 | 22 81 87 47 26 96 92 60 57 64 66 16  5 83 67 49 32 39 71 80 40 63 99 75 53
Card  26: 62 36 66  9  3 71 75 67 29 61 |  9 31 66 82 29 41 67 71 38 36 28 76 14 75 69 61 99 57 62 88 70 95 63 10 59
Card  27: 46 38 59 90  1 65 16 80 76 34 | 70 15 49 31 27 71 54 46 76  1  8 77 93  2 90 39 14 67 62 16 78 56 68  9 58
Card  28: 47 85 54 21 37 14 44 73 12 51 | 78 70 14 77 98 88 25 49  9 79 58 23 52  2 43 17 12 84 59 51 56 89 47 48  6
Card  29: 74 37 60 11 56 21 87 44 33 46 | 80 61 34 54  9  3 45  7 55 13 98 84 10 19 14  8 90 81 50 69 31 12 38 29 78
Card  30: 29 20 44 62 79 34 52 15 49 48 | 17 84 34  1 33  9 23 55 94 10 95 69 42 79 78 44 51 82 20 25 81 29 15 13 32
Card  31: 88 41 38 98 34 40 92 36 25 50 | 33 54 18 53 46 69  8 22 25 36 51 34 42 92 85 45 40 60 84 27 97 39 10 70 41
Card  32:  5 28 85 29 95 37 60 34 24 16 | 74  8 48 73 34 65 66 56 64 85 78 17 39 67 92 30 75 22 95 12 29 24  6  2 51
Card  33: 71 31 99 53 62 80 65 32 13 23 | 87 20 55 24 42 19 67 77 37 89 32 83 44  9 60 46 47 36 49 35 92 10 82  2 81
Card  34: 78 61 12 81 96 82  7 30 80 32 | 62  8 56 89 11 12 39 31 17 18 79 51 30 92 48  5 45 78 41 44 77 98 71 67 73
Card  35: 59 35 63 76 51  8 53 70 24 97 | 20 36 31 17 77 26 34 15 41 39 61 24 35 46 80 74  2 71  5 91 16 11 55 87  4
Card  36: 46 51 79 66 57 52 21 11 75 33 | 88 64 74 99 22 39 42 11 14 65  1 56 86  8 26 16 72 13 55 20 60 40 19 85 58
Card  37: 83 88  1 19 95 30 38 43 14 51 | 98 20 22 55 13 58 93 21 68 11 76 70 71 35 44 90 52 53 75 17 96 27 49 31 26
Card  38: 87 49 43 19 16 34 88 66 67  9 | 70 46 63 58  7 53 96  1 59 35 91 85 18 21 93 68 90 73 11 92 60 61 98 38 15
Card  39: 24 68 25 61 54 63 30 37 21 73 | 50 84 48 10 81  5 62 28 92 66 96  6 20 83 78 88 31 89 12 71 60  8 34 70 90
Card  40: 18 72 44 15  3 19 69 63 73 57 | 14  3 52 76 71 12 50 13 86 21 55 31 27 29 43 47 90 75  9 97  6 32 96 37 18
Card  41: 81 66 49 20 86 80  4 55 93 44 | 87 81  7 47 25 85 80 51 76 27 78 10 16 50 33 66 13 64 35 18 44 63 29 92 48
Card  42: 27 21 14 28 69 89 94  9 19 46 | 92 13 27 99 96 19 43 54  4 14 45 16 44 83 24 61  2 28  5 90 49 51 63 64 73
Card  43: 34 49 58 85 23 88 84 78 89 55 | 72 45 73 23 75 52 84 78 46 55 58 71 98  5 56 91 49 39 88 70 42 59 89 85 34
Card  44: 18 69 46 58 73 59 56 23 12 40 | 71 23 87 93 21 84 10 79 47 92 91 13 52  1 32 78 59 95 72 55 97 56 43 61 75
Card  45: 33 47 58 69 57  1 82  6 61 48 | 48 97  4  1 67 66 82 12  6 29 21 96 90 33 57 28 47 69 74 27  2 32 58 61  9
Card  46: 42 54 98 50 36 86 27 66 29 60 | 32 23 40 62 38 91 43 98 29 85 18 30 66 28 81 35 68 61 11 27 50 22 41 46 42
Card  47:  1 31 87 71 53 17  5 93 84 56 | 48 26 14 47 34 44 18 93 17 88 61  8 95 74 53 50 56 80 62 84 99 49 87 52  1
Card  48: 40 75 79 29 64 57 33 49 95 68 |  7 39 63 79 89 10 23 40 22 86 92 13 57 29  9 19 90 87 58 12 77 16 75  4 91
Card  49:  4 45 87 47 71 35  9  2 81 77 | 93 33 49 75 11 34 62 39 83 40 55 17 84 43 80 60 46  7 18 56 48 66 95 57 74
Card  50: 88 42  2 30 24 89 15 93 16 45 | 93 45 72 68 30 28 17 82 64 91 29 98 14 24 88 70 55 48 58 10 42 83 66  2 77
Card  51: 91 96 87 48  6 73 95 55 71 89 | 94 49 84 33 82  9 21 32 25 46 65 15 86 83 66 11 37  1 14 61 92 36 35 45 27
Card  52: 48  3 94 56 41 13 34  8 96 25 | 40 88 46 14 68 25 75 66 87 55 64 78 92 43 19 97 53 90 83 59 69 31 84 95 13
Card  53: 13 45 61 92 91 32 49 58 43 36 | 44 70 55 28  2  6 35 79 24 54 82 95 52 73 75 84 34 57 21 23 33 22 80 88  1
Card  54: 61 52 20  8 73 54 83 60 29  6 | 74 40 27 46 81 75  3 42 47 69 22 59 58 49 90 63 57 50 79 70 82  5 53 91 39
Card  55: 41 51 64 55 57 44 26 70 62 34 | 24 82 49 39 56 84 31 27 86 77 22  6 73 72 99 47 60 18 53 68 42 19 66  9 50
Card  56: 30 89 82 17 72 46 98  5 54 58 |  4 86 18 15 84 41 16 63 44 91 12 31 66 96 94 87 49 59 67 64 80 33  5 11 40
Card  57: 39 80 17 47 15 96 69 50 46 24 |  5 83 16 52 57 27 98 43 78  1 66 90 19  6 58  3 49 94 85 62 44 54 75 14  9
Card  58: 42 77 37 13 74 40 31 92 36 46 | 16 74 80 59 51 31 95 85 40 93 23 15 32 18 46 97 36 13 79 10 37 99 77 25 92
Card  59: 39  1 78  7 57 46 91 26 12 94 | 46 13 26 83 21  1 67 78 50 94  8 12 39 61 86 91 35 29 32 72 30 97 57 16  7
Card  60: 62 32 18 51 40 96 93 36 80 84 | 42 93 65  8  2 52 84 70 11  1 92 21 80 99 18 14 17 47 56 90 49 67 19 48 97
Card  61:  6 83 74 89 44 73 39 42 47 88 | 72 74 42 21 88 77 18  6 83 85 49 73  5 39 78 44 64 10 47 14 89 53 98 13 92
Card  62: 91 86 35 23 30 28 77 88 56 41 | 54 26 90 20 96 78 14  5 47 98 31 55 74 83 33 15 67 92 19 40 73 72 52 81 94
Card  63: 87 91 78 92 33 71 80 47 13 65 | 32 33 56 55  2  4 61 71 91 97 93 78 83 74  3 13 47 70 54 80 65 60 49 26 96
Card  64: 70 61 63 52 32 35 85 46 54  4 | 42 54 32 84 56 46 29 61 63 78  4 36 80 86 26 17  3 87 48 21 85 52 35 70 22
Card  65: 83 95 45 97 49 67 13 92  1 90 | 68 75 20 96  6 33 73  1 50 14 17 66 34 78 54 84 92  9 64 61 85 88 72 42 12
Card  66:  1  7 99 75 17 21 48 70 30 13 | 70 80 45 89 75  7 21 99 20 54 42 46 67 85 61 17  1 16 30 92 77 48 13 68 90
Card  67: 69 55 20 91 47 31 33 75 56 39 | 69 31 62 20 58  1 93 48 35 55 47 13 56 60 50 75 25 37 91 81 10 39 32 33 54
Card  68: 14 97 54 28 73 64 81 32 47 17 | 86 48 88 25 47 65 22 81 28 95 41 14 27 26 46 64 79 61 45 96 32  9 21 54 53
Card  69:  6 21 89 82 75 48 46 56 68 47 | 48 32 74 30 13 56 93 90 68 33 41 58 21 47  8 17 65  6 89 97 75 82 46 26 59
Card  70: 35 48 78 92 64 30 88 77 76 10 | 76 33 48 67 78 64 24 69 36 14 77 85 30 73 53 91  3 35 96 88 43 84 10 95 92
Card  71: 59 78 57 66 15 18 41 83 70 35 |  7 62 19 30 48 97 89 71 40 27 11 63 60 47 23 86 10 84  4 75 80 69 61 67 25
Card  72: 80 82 46 70 10 14 55 49 62  9 | 31 76 62 17  8 49 19 50 85 72 77 75 42 48 33 60 54 45 12 91 20 92 15  3 25
Card  73: 38 83 96 47 42 99 13 82 36 85 | 74 86 59 16 49 45 81 61 44 39  3 91  9 26 35 25 55 21 19 41 90 70 10 29  4
Card  74: 92 36 96 65 24  6 98 13 33 86 | 17 83 30  5 46 51 54 81 44 99 33 56 45 14 57 34  8 16 77 48 40 94 82 73 75
Card  75: 14 21 57 66 33  8 90  7  4 28 | 91 61  3 84 89 45 60 56 51 10 58 20 96 78 73 93 97 44 19 15 12 90 35 87 42
Card  76: 37 91 60 44 43  3 40 33 95 51 | 24 39 81  1 46 83 97 88 87  6 67 40 22 96 93  2 71 33 29 15 41 16 89 21 68
Card  77: 91 84 43  9 87 96 37 64 41 31 | 35 13 30 43 78 32 23 85 84 19 88 68 10 63 27 77 61 50 41 94 54 12 97 86 33
Card  78:  9 78 53 16 80 56 91  3 62 70 | 85 64 21 88 51 16 15  4 69 30 13  1 70 17 52 23 90  5 24 50 19 81 41 67 12
Card  79: 59 28 42 51 66 58 63  9 24 47 | 69 95 26 36 14 62 13 20 35 25 34 74 40 41  9 39 45 77  5 10 55 96 22 81 49
Card  80: 72 83 73 23 85  2 53 22  3 43 | 14 50 67 63 19 76 39 60 31 33 62 92 29 12 49 75 69 78 44  8 96 95 34 65 20
Card  81:  2 46 29 50 65 57 55 83 74 12 |  4 70 97 54 68 99 81  5 84 10 73 61 88 66 27  8 56 33 79 47 85 49 17 16 34
Card  82: 37 30 10  3  8 34 44 24 57 13 | 42 17 25 65 48 71  4 64 51 83 75 27 72 96 45 18 11 15 70 53 91 14 12 87 59
Card  83: 82 81 15  4 54 96 74 72 37 70 | 37 78 72 25  4 66 81 97  6 83 43 96 61 44 15 71 40 54 27 70 82 98 74 93  7
Card  84: 97 52 96 23 80 53 57 83 16 62 |  5 31 89 91 84 33 52 83 76 23 64 67 10 97 29 63 96 58 74 53 62 57 80 81 92
Card  85: 53 33 76 24 81 68 51 47 40 89 | 70 38 51 50 85 57 89 40 30 61  1 24 54 75 32 33 96 19 14 53 76 20  7 99 47
Card  86: 19 96 52 18 15 53 82 16 86 13 | 69 27 32 85 87 30 33 83 11 47  3 21 68 70 42 61 46  2 64 65 44  1 97 48 74
Card  87: 18 40 55 62 39 95 60 11 76 46 | 82 81 22 46 92 80 62 91 12 40 76 60 69 78 17 18 11 93 56 39 37 88  3 64 95
Card  88: 72 65 91 61 57  4 49 24 45 31 | 28 49 91 31 19 59 65 36 34 87 72 24 60 89 17 12 57 30 75 32 63  8 21  4 25
Card  89: 18 24 64 43 33 56  6 67  8 16 | 40 21 27 52  3 23 65 89 16  7 96 31 48 73 33 37 18 99 12 50 74 26 71 84  8
Card  90: 75  3 92 35 12 26 49 59 60 55 | 65 58 39 73  3 56 11 44  4 47 68 24 86 10 61  6 72 13 82 42 29 93 97 77  8
Card  91: 78 40 49 75 60 15 59  7 31 93 | 71  9 48 10 69 29 65 40 21 57 68 87 12 35 81 70 30 94 36 97 51 43  8 82  5
Card  92:  3 53 23 43 15  4 98 11 67 29 | 35  3 93 87 83 60  5 92  1 90 67 23 78 98 20 37 81 71 31 82 95 47 53 75 21
Card  93: 20 61  6 36 52 77 59 16 18 81 | 66 29  4 87 61 92 78 30 68 69 67 57 88 83 71 54 24 21 13 56 84 35 60 86 53
Card  94: 25 52 87 17 94 41 23 30 72 53 | 93 62 38 77 31 24 21 36 75 64 45 83 56 39 90 29 55 43 71 54 42 98 76 74 28
Card  95: 84 66 91  8 26 82 85 96 31 36 | 93 51 40 98 69 74 53 67 86 23 77 41 62 89 64 34  5 26 50 73 42 43 13 19 91
Card  96:  7  6 90 39 14 73 66 81 33 67 | 63 26  1 58 29 10  3 13 94  9 85 68 69 19 53 96 90 36 49 99 31 74 54 45 77
Card  97: 66 64 77  7 88 18 40 24 10 63 | 28 22 62 41 30 21 19 12 50 43 46 42 56  6 60 36 95 82 97  2 73 55 38 53  8
Card  98: 48 10 16 15 93 40 37 72 57 88 | 10 59 38 19 97 23 51 40 35 31 56 54 21 27 28 81 15 67 12 57 37 65  9 22 74
Card  99: 45 57  7 23 86 82 15 14 75 35 | 55 19 84 37 82 39 15 77 42 52 44 18 75 45  7 69 67 23 86  6 89 14 43 57 35
Card 100: 68 85 29 69 17 44 19 56 92  8 |  8  4 20 98 36 39 78 79 72 81 51 22 13 47  2 77 30 28 64 41 89 57 50 34 16
Card 101:  6 91 90 43 85  1 19  2 28  9 | 63 25  2  9 83 85 87 43 91  6 62 64 74 28 19 82 92 29 36  1 71 90 60 99 84
Card 102: 20 72 12 52 58 28 30 76 42 55 | 30 47 59 29 20 93 90 33 76 58 78 28 52 83 48 72 54 42 67 17 55 12 36  2 37
Card 103: 58 18 40  8 73 69 22 74 26 63 | 61 40 63 41 82 87 22  8 34  6 73 95 69 44 45 85 62 74 27 28 26  4 96 58 15
Card 104: 42 71 57 39 22 79 43 80 90 37 | 43 37 76 94 40 67  4 55 74 21  7 42  3 39 28 12 80 57 32 61 95 58 64 90 13
Card 105: 60  9 50 14 56 11 54 33 77 84 | 77 81 17 99 11 84 70 60  5 43 83 19 80 13 54 33 50 30 87 31  9  4 37 56 14
Card 106: 79 87 86 96  1  8 63 43 39 91 |  6  2 75 63 67 38 11 96 90 91 87 97 86  9 21 77 43 36 79  8 40 85 39  1 13
Card 107: 97 83 21 39 74 64 79 70 77 14 | 85 32 55 18 24 14 79 57 51 12  4 21 23 70 26 83 39 66 63  1 64 73 30  8 77
Card 108: 18 41 11 62 88 38 73  4 47 36 | 82 53 41 92 65 15 42 47 85 96 26 43 58 62 11  3 54 55 89 63 30 17 20 93  2
Card 109: 28 34 55 39 22 99 98 89 86 54 | 58 76 46 70 91 43  2 79 16 25 89 42 78 52 12 56 44 69 80 85 84 99 62 19 15
Card 110: 32 38 50 41  8 97 84 60 92 40 | 43  7 51 76 69 38 92 34 41 71  8 49 95 79 32 45 42 58 60 40  4  3 98 31 20
Card 111: 61  7 67 98 74 21 79  4 85 68 | 90 80  4  8 46 55 40 28 30 38 64 86 73 51 42 66 69 15 29  6 52 78 82 49 41
Card 112: 13 92 98 37 72 52  1 30 42 36 | 17 65 49  6  5 33 40 10 57 72 12 53  7 15 44 18 90 46 81 99 26 16 23 52 66
Card 113: 39 30 46 62 55 42 32 77  9 37 | 37 21 50 40 63 97 28 11 51 26 75 86 80 32 16 69 77 60  6 99  9 72 22 55 79
Card 114: 54  6 72 17 56 76 23 78  7 38 | 15 76 40 56  8 50 51 97 94 64 13  3 69 24 54 66 14 25 82  1 71 41 47 74 92
Card 115: 50 66 30 89 46 20 35 59 22 88 | 96 72 32 97 61 64 25 70  4 11 88 34 46  6 10 73 71 79 45 33 66 50 24 13 42
Card 116: 83 33 99 22 90 32 11 28 47 85 | 80 58 57  7 15  1 23 59 86 54 67 36 83 38 34 18 37 35 19 90 45 24 46  4 84
Card 117: 95 23 58  8 76 82 60  1 15 80 | 75 77 10 85 36 52 91 54 44 96 97 89 25 67 16 31 99 51 68 83 55 29  3 20 33
Card 118: 53  7 99 97 39 37 80 52 18 77 | 76 78 83 34 75 69 39 14 27 44 89 56 23 30 43 48 57 61 29 82 87 93 67 62 12
Card 119: 19 22  6 97 71 68 59 95 67 75 | 91 40 20 74 87 46  4 85 63 64 50 88 14  1 54 39  3 62 58 10 28 55 27 86 60
Card 120: 37 76 87 74 15 84 14 11 99 60 | 24 15 92 60 25  3 86  1 33  5 62 65 79  6 91 45 11 14 10  2 43  4 68 85 54
Card 121: 74 43 96 14 67 85 19 51 80 95 | 27 53 14 15 72 99 85 30 33 20 13 58 12 25 36 18 45 67 34 79 32 76 96 95 55
Card 122: 93 51 95 32  2 18 40 72 31 45 |  8 98 70 17 62 22 63 72 69 73  3 26 42 25  1 41 28 13 77 92 32 60 56  2 65
Card 123:  9 82 93 20 35 69 87 40 30 67 | 87 10 67 63 76 23 45 35 54  5 75 79 66 40  1 89 71 20 77 43 90 65  9 82 37
Card 124: 93 48 59 54 75  8 83 35  4 64 | 71 59 41 35  4 65 49  5 98 91 54 45 76 64 93 75  8 83 48 87 94 32 16 89 82
Card 125: 24 14 40 22  2 57 67 35 36 98 | 36 82 19 88 23 55 15 97 78 35 94 24 67 52 14 30 40 56 38 57  2 31 22 98 71
Card 126: 22  7 97 12 95 66 69 51 59 88 | 94 88 59 58 70 64 95 29  7 93 68 21 16 19 36 39 41 66 10 76 78 82 63 34 56
Card 127: 46  9 32 85 22 20 14 68 98 61 | 69 25  4 70 64 57 14 89 41 98 22 53 27 77 20 56 84 42 85 40 90  6 61 71 60
Card 128: 53 84 81 45 23 13 93 34 42 80 | 80 74 39 50 75 49  7 61 43  5  1 51 36 54 57 97 26 32 82 98 68 45 93 37 86
Card 129: 40 29 85 88 86  7 49 67 91 92 | 86 38 79 31 57 34 78 17 52 53 22 36 62 75 21 70 88  7  3 49 28  6 85 14  4
Card 130: 63 20 36 62 43 98 99 12 46 57 | 14 32 99 22 17 70  5 91 57 95 49 15 28 46 84 89 78 79 43 98 45 50 88 16 23
Card 131:  7 16 87 36 73 82 11 40 14 69 | 25 31 82 24 50 38  2 28  4 23 72  6 51 79 86 46 55 97 42 90 84  1 39 32 27
Card 132: 67 56 15 63 40  9 59 23 94 27 | 26 65 80 40 46 23 37 78 27 12 34 98 41 59 94 16 50 79 90 15  4  7  6 62 17
Card 133: 18 91 27 52  4 34 12 32 65 41 | 45 55  7  3 84 79 54 91 75 80 17 49 42  9 18 48 59  6  8 22 94 10 93 53 57
Card 134: 78 75 48 26 14  8 91 41 34 68 | 18 29 57  5 17 22 56 97 74 34 13 50 40 33 62 20 10 71 58  1 21 88 87  8 25
Card 135:  5 97 16 92 74 51 61 65  3 14 | 15 50 86 24 99 90 59 32 45 81 97 75  6 25 29 80  9 89 46 70 40 57 42 63 60
Card 136: 81 35 23 70 51 14 31 50 67  7 | 32 28 40 58  4 99 18 95 11 90 86 13 84 74 61  5 44 47 24 38 21  1 77 48 78
Card 137: 74 99 57 81  5  1 90  9 69 30 | 88 23 97  7 25 68 78 91 53 15 55 81 92 90 12 18 50 71 61 75  8 76 36 19 34
Card 138: 37  2 84 13 78 51 29 15 42 71 | 49 30 16 88 79 67 76 75 38 80 91  6 28 83 14 26  1 19 40 18 32 98 74 17 44
Card 139: 49 75 16 61 39  4 51 55 17 97 | 11 45 56 47 81 78 67 21 57 42 84 58  8 13 10 91  7 19 46 14 90 87 26  1 18
Card 140: 39 19 41 45 17 30 29 66 61 25 | 61 53 29 41 37 30 95 93 45 17  8 21 66 10 14 78 65 18 39  5 52 91 19 25  4
Card 141:  7 66 29 40  9 14 34 64  4 31 | 98 63 65  6 92 56 81 67 48 88 49 18 38 61 13 95 28 85 20 17 21 30 58 52 89
Card 142: 32 88 54 27 21 86 49 87 44 45 | 15 44 67 75 87 79 21 10 34 70 54 49 88  3 28 32 65 27 43 98 53 64 45 86  9
Card 143: 14  7 67 53 37 73 45 18 62 34 | 87 68  3 22 40 86 26 85 70  4 61 78  1 29 48 12 37 10 77 54 99 36 94 79 15
Card 144: 92 35 52 27 19 16 58  4 22 85 | 47 37 30 51 96 28 58 81 85  9 19 10 46 22 27  7 35 52 16 60  4 92 53 13 84
Card 145: 71 32 62 83 43 20 97 57 78 24 | 88 34 23 25 67 52 11  9 49 80 70 29 43  2 44 45 62 56 33  3 20 98 28 77 79
Card 146: 99 11 17 93 16 77  1 46 55 68 | 25 17 77 99 35 53  3 84 98  2 21 74 27 58 16 20 33 22 39 28 69  9 92 46 52
Card 147: 56 26 30 23 66 94 82 47 14 49 | 68 41  6 13 99  7 71 67 35 93 57 84 44 40 70 89 42 63 74 22 20 55 33 91 64
Card 148: 21  6 43 36  7 44 61 23 93 57 | 53 20 51 59 74 77 16 92 47 25 62 58 18 85  3 63 46 81 99  5 79 70 69 75 34
Card 149: 31 36 91 20 17 50  1 18 64 52 | 66 90 80 33 26 24 30 58 45 77 25 29 44 48  6 35 96 13 78 65 68 98 93 89 94
Card 150: 81 91 37 66 12 33 59 97 38 32 | 61 38 91 95 75 85 48 44 37 47 84 66 35 62 79 94 25 22 97 17 10 31 96  5 78
Card 151: 32 35 11 75 63 61 42 62 10 56 |  4 44 53 12 50 76 51  5 82 25 30  8 89 41 34 98 54 96 37 74 35 16 31 57 65
Card 152: 96 60 29 43 99 19 80  8  5  2 | 87 52 19 11 99 35 20 60 55 80 24 21  8 61 38 78 42 28 95  6 64 65 49 59 26
Card 153: 53 30 75 13 87 77 56 89 63  6 |  7 54 93 80 47  4 72  9 69 44 97 96 23 24 94 67 55  8 33 30 37  6 14  5  3
Card 154: 10 65 46 58 13 25 69 52 19  3 | 47 41  9  3 40 79 89 21 33 73 14  7 74 65 31 62 24 69 60 87 12 16 53 80 82
Card 155: 24 51 35 95 93 73 36 65 27 20 | 14 83 97 94 29 39 19 38 33 32 44 92 60 25 76 64 49 71 65 34 91 31 53 74 23
Card 156: 52 31 50 54 82 42 23  9 39  3 | 29 64 88 70 48 74 12 90 75 57 23 25 58 68 36 33 73  5 84 28 47 92 50 41 21
Card 157: 66 20 50 96  6 84 54 67 59 81 | 77 60 38 65 37 44 15 73 23 83 18 71 89 53 90 36 40 32  2 39 78 63  8 51 19
Card 158: 38 46 85 81 87 86 98 90 37 34 | 41 71 35 26 12 19 51 93 39 20 76 24  7 80 50 56 49  2 57 84 68 92 54  1 75
Card 159: 61 36 84 47  4 22 49 17 31 75 | 77 83 49 55 84 80 18 44 31 47 22 67  4 68 69 35 75  5 59 13 61 39 36 54 17
Card 160: 90 70 62 65 87 95 15 77 76 35 | 70 94 97 10 90 80 35 27 84 87 42 62 54 26 95 57 82 63  1 18 92 25 49 64 21
Card 161: 44  6 28 50 79 16 15 83 45 53 | 79 72 12 45 50 35 67  6 89 28 15 61 16  7 46 36 44 55 27 92  1 59 83 53 94
Card 162: 29 51 46 64  4 75 37 78 81 71 | 83 71 37 39 74 66 32  1 51 93 43 46 20  3 15 50 81 64 75 73 78 29 33  4 22
Card 163:  1 52 37 97 88 47 94 10 98  5 | 85 31 33 46 15  1 16 61 98 59 64 94 83 68 35 11 44 80 38 36 84 72 86 40 29
Card 164: 60 40 94 62 18 71 92 25 21 64 | 64 18 58 76 38 55 40 45 71 92 73 75 25 62 12 94 68 79 23 91 21 60 72 39  7
Card 165: 63 88 91 22 85 18 39 55 33 84 | 95 88 37  5 39 46 33 61 32 45 74 20 27 35 76 85 84 18 54 86 91 75 22 55 63
Card 166: 72 11 31 50 53 82 41 74 62 87 | 42 34 50 11 96  3 77  7 37 22 44 38 62  1 87 68 12 54 74 53 47 82 69 89 85
Card 167: 79 26 70 95 25 16 18 37 75 61 | 39 11 68 61 44 53 42 94 37 45 75 78 62 18 95 26 79 92 38 13 16 64 21 91 57
Card 168: 94 86 69 88 31 15 62 44 19 14 |  3 24 29  8 44 61 89  7 75 15 91 36 45 70 66  4 35  6 71 22 25 39 55 33 18
Card 169: 86 68 72 15 42 99  9 35  2 74 | 42 84 59 86  6 15 53 89 85 79 20 68 62 61 10  2  9 51 99 54 33 35 13 48 93
Card 170: 83  6 15 80 93 63 79 50 69  5 | 15 25  6 93 69 50 83 68 16 40 66 58 63 79 52  7 80 34 61 95  5 33 78 91 32
Card 171: 33 85  4 12 72 62 49 67 17 53 |  4 17 53 72 47  6 49 56 82 48 12 26 30 85 61 15 36 70 64 25  2 33 67 46 62
Card 172: 98 63 26 82 12 61 56 95 27 99 | 76 30 14 95 26 97 71 19 57 67 73 48 63 54 82 18 98 27 61  5 12 44  1 56 74
Card 173:  7 32 34  4 22 79 27 10 78 65 |  3 81 65 36 91 62 94 54 41 32 12 28 39 34 18 61 78 79 80 66  9 63 43 72 97
Card 174: 14 78 60 32 26 31 15 80 11 72 |  1 31 33 35 73 83 97 36 21  3 26  9 91 23 51 84 82 70 22 20 34 90 98 87 69
Card 175: 73 14  7 11 20 64 30 90 62 23 | 60 53 15 73 63 19 71 92 48 89 80 44 78 79  2 76 45 64 42 35 81 27 10 21 26
Card 176: 32 30 39 10  1  3 67 66 94 62 | 86 95 56 54 58 35 90 19 74 43  5 48 17  2 46 65 97 71 36 31 69  8 47 94 42
Card 177: 24 90 40 47 51 75 63 29 57 10 | 49 68 61 43 30 26 84 59 99 75 44 41 17 24 12 38 90 37 36 35 91  9 89 46  8
Card 178: 73 74 31 76 10 21 70  3 30 41 | 39 14 30 70 79 75 97 44 87 20 92 12 86 56 18 46  8 90 23 98  2 59 28 53  3
Card 179: 78 44 89 84 50 97 55 90 77 99 | 79  1 88 65  2 50 72 68  7 15 85 41 64 93 37 16 53 44 42 48 89 97 59 60  8
Card 180: 55 98 13 45 33 91 88  4 49 37 | 18 44 64 83 56 79 81 26 78 54 72 75 11 70 66 57 73 61 62 34 19 95 93 94 76
Card 181: 94 47 65 55  8 45  1 67 71 25 | 99 34 43 64 36 50  6 51 27 59 37 40  3 98 72 78 38 74 82 46 85 90 48 32 84
Card 182: 78 75 63 31 30 70 84 50 28 19 | 61 18 58 87 77 48 71 50 91 92 60 86 73 94 85 57 97 15  1 25 74 67 11 68 47
Card 183: 94 27 68 41  8 72 48 85 97 49 | 81 35 90 69 76 18 53  1 59 25 88 31  4 93 84 32  9 55 66 50 22 62 43 60 17
Card 184: 40 31 56 54 59 98 93 81 24 44 | 62 42 93 56 99 10 81 59 37  6 41 66 44 72 31 30 20 54 51 24 27 83 40 73 98
Card 185: 38 73 79 48  3 46 99 93 50 24 | 65 34 40  2 20 92 10 32 67 57 22 47 96 11  7 31 87  6 28 95 77 25 58 29 27
Card 186: 47 65 99 98 90 68 13 49 51 10 | 90 82 27 68 84 83 57 50 18  5 49 65 85 10 46 13 21 81 73 51 71 47 98 88 99
Card 187: 25 56 18 15 59 47 20 86 50 83 | 25 57 83 36 56 87 50 34  9 70  4 64 77 45 92 13 20 47 48 15 97 18 86 28 59
Card 188: 99 16 44  2 85 17 71 45 49 11 | 94 13 45 36 77 89 26  6 39 27 84  1 80 21 73 41 33 90 46 72 65 96 34 71 83
Card 189: 34 24 76 68 47 19 85 15 50 46 | 43 67  4 44 14 34 19 61 47 68 50 46 99 94 16 76 15 28 36 27 52 85 88 24 89
Card 190: 56 20 43 86  2 88 87 30 14  4 | 43 14 19 92  3 23 87 74 50 97  2 88 18 80 20 86 36 41 95 27 57 98 49 30 26
Card 191: 47  2 18 84 91 66 24  6 42 56 | 12 93  7 50 42 45  2 91 66  4 32 47 19 56 49 18 15 24 44 84 97  6 16 31 25
Card 192: 42 88 68 56 93 48  9 52 20 70 | 30 93 42  4 68 70 36 56  9 15 88 98 64 67 33 91 20 61 50 27 13 94 52 48 85
Card 193: 46 57 19 40  9  7 47 33 86 11 | 65 54 38 43 82 55 79 51 77 73 74 97 75 96  6 47 62 88 92 18 84 48 41 29 52
Card 194: 58 23 35 79 82 72 44 93 12 43 | 43 60  2 24 77 48 61 25 44 75 35 12 93 51 36 72  6 31 29 50 37 80 19 14 87
Card 195: 15 77 78 50 36 83 68 52 86 26 | 16 72 67 88 14 81 34 24 71 32 91 77 90  1 98 95  7 28 49 84 86 20 44 73 56
Card 196: 25  3 32 15  1 56 27 51 82 81 | 87 79 15 11 98 54 56 88 18 92 69 25 66 27 60 58 44  1 51  3 32 81 12 72 41
Card 197:  3 99 81  8 93 28 76  7 27 48 | 78 98 85  5 93 77 72 62 69 82 50  9 35 74 18 10 33 67 90 31 79 84 58 29 17
Card 198: 26 81 19 24 59 82  8 95 86 17 | 13 22 10 96 19 20 88  3 90 78 24  9 50 34  6 94  7 60 44 76 31 81 26 33 43
Card 199: 77 91 58 16 47 94 23 30 88  5 | 38 66 12 25 95 67 72 89 36 45 63 15 54 98 74 57 32 39 59 28  7 62 82 13 26
Card 200: 82 47 52 12 83  4 26 93 33  9 | 31 30 91  2  6 27 28  1 81  8 75 92 56 57 41 24 72 85 53 74 59 11 66 32 54
Card 201:  4 13 26 57 84 17 63 10 98 56 | 72 85 68 47 44 60 54 34 38 16  8 11 23 84 32 18 69 13 26 35  9 73 43 15 89
Card 202: 11  9  1 42 71 78 97 89  8 10 | 33 17 81 48 60 96 69 37 12 46 73  4 76 54 86 91 28  5 51 98 99 84 13 85 32
Card 203: 37 80  7 87 79 60  6 49 16 12 | 23 34 15 46 38 20 27 45 33 97 37 14 68 83 49 79 43 70 57 60 11 63 24 35 73
Card 204: 84 24 48 76  7 18 77 37 69  5 | 88 39 92 94 34 37 11 40 85 35  2 81 73 58 42 66 83  9 56 12 14 51 62 20  7
Card 205:  5 84  4  6 95 77 59 67 74 35 | 58 47 29 34 79 86 35 89 71 96 27 64 90 48 37 78  1 39 46 21 98 91 43  8 56
Card 206: 56 21 34 13  1 17 99 11 76 60 | 36 24 83 31 50 19 82 32 61  9 98 71 79 39 97 37 29 13 27 10 52 22 41 40 59
Card 207: 62  7 22 90 51 96 12 13 36 52 | 48 37 70 24 73 51 83  3  5 77 29 87 23 18 26 76 19 97 20 86 84 14 63 33 21
Card 208: 40 42  5 91 29 59 70 49 23 94 | 82 81 30 61 64 65 19  9 67 75 92 16 26 52 73 43 55 35 17 93 39 90 74 53 51
`;

export default input;
