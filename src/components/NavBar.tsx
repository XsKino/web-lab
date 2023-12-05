import React from 'react'
import styles from '@styles/components/NavBar.module.css'
import { Button } from '@nextui-org/button'

const Kino = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={`h-[1.4em] ${className}`}
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    viewBox='0.00 0.00 876.00 1696.00'>
    <path
      d='
  M 155.95 559.37
  A 1.47 1.47 0.0 0 0 155.93 562.00
  Q 201.62 585.36 247.39 608.85
  Q 260.61 615.63 275.56 629.19
  Q 292.34 644.40 298.15 664.11
  Q 301.26 674.67 301.26 689.75
  Q 301.26 861.25 301.25 1032.75
  Q 301.25 1051.04 318.60 1058.72
  Q 321.00 1059.78 327.50 1060.33
  Q 331.01 1060.63 336.51 1060.62
  Q 383.88 1060.56 431.25 1060.67
  Q 446.31 1060.71 457.79 1068.48
  C 473.65 1079.22 481.64 1096.11 479.73 1114.98
  Q 477.76 1134.35 461.74 1148.00
  C 449.65 1158.29 440.33 1159.24 423.25 1159.26
  Q 355.00 1159.33 286.75 1159.26
  Q 272.20 1159.25 266.79 1158.64
  C 229.16 1154.39 198.56 1126.51 191.39 1089.02
  C 190.04 1081.97 189.62 1073.95 189.62 1065.80
  Q 189.62 901.90 189.62 738.00
  C 189.62 734.80 189.03 731.75 188.96 729.01
  C 188.38 706.28 170.28 690.23 152.66 679.05
  Q 111.14 652.72 69.52 626.54
  Q 45.16 611.21 26.61 596.90
  Q 20.88 592.49 15.17 585.08
  C 7.61 575.30 6.42 562.77 9.53 550.88
  C 11.60 542.95 17.46 535.62 22.47 530.72
  Q 27.50 525.80 41.26 515.71
  Q 50.38 509.02 66.04 498.81
  Q 109.34 470.58 152.73 442.46
  C 170.95 430.65 187.15 416.62 188.84 393.87
  Q 189.38 386.57 189.39 379.25
  Q 189.62 234.63 189.62 90.00
  C 189.62 69.22 195.39 50.78 208.29 34.49
  C 213.59 27.79 220.18 20.66 227.43 15.88
  C 237.48 9.25 248.74 4.55 260.67 2.51
  Q 262.97 2.12 265.23 1.52
  C 268.22 0.73 270.55 0.86 273.50 0.85
  Q 351.75 0.74 430.00 0.84
  C 437.04 0.85 444.99 2.15 451.40 5.28
  C 467.22 13.01 477.87 27.13 479.65 45.00
  C 481.42 62.88 474.86 78.17 461.16 89.18
  C 449.74 98.35 436.72 100.15 422.49 100.14
  Q 374.37 100.10 326.25 100.19
  C 314.34 100.21 304.77 109.58 302.10 120.43
  Q 301.26 123.82 301.26 139.65
  Q 301.26 285.95 301.21 432.25
  C 301.21 446.01 298.95 459.43 292.86 471.31
  C 281.03 494.39 259.48 508.21 236.80 519.38
  Q 196.06 539.45 155.95 559.37
  Z'
    />
    <path
      d='
  M 723.20 1093.28
  C 721.23 1093.38 720.23 1092.01 719.03 1091.41
  Q 679.92 1071.91 640.80 1052.45
  C 613.81 1039.03 589.40 1022.19 580.53 991.09
  C 579.73 988.28 578.92 984.27 578.77 981.19
  C 578.48 975.45 577.61 969.60 577.61 964.09
  Q 577.61 816.92 577.84 669.75
  C 577.86 654.71 575.31 643.10 561.09 635.66
  C 558.67 634.39 554.24 634.13 550.91 634.13
  Q 500.20 634.13 449.50 634.13
  Q 443.97 634.13 437.20 632.49
  C 417.23 627.65 400.28 610.51 399.35 589.30
  Q 399.31 588.58 398.66 585.80
  C 398.18 583.75 399.14 581.90 399.24 580.08
  C 400.27 561.28 413.35 544.45 430.48 537.94
  C 437.45 535.29 445.15 534.73 453.60 534.74
  Q 526.80 534.76 600.00 534.77
  C 604.61 534.78 609.04 534.75 613.62 535.54
  C 631.55 538.64 647.19 544.79 660.70 557.28
  C 679.01 574.20 689.41 596.78 689.40 621.50
  Q 689.35 768.00 689.39 914.50
  Q 689.39 918.29 690.51 929.36
  C 692.51 949.19 705.12 962.50 721.09 972.91
  Q 770.85 1005.40 820.57 1037.98
  C 832.98 1046.11 847.82 1055.86 858.59 1067.15
  C 873.30 1082.56 876.40 1105.07 861.59 1121.85
  Q 855.99 1128.19 848.22 1133.99
  Q 835.27 1143.65 821.65 1152.36
  Q 772.85 1183.59 723.94 1214.66
  C 712.15 1222.15 698.79 1233.25 693.52 1247.19
  C 689.21 1258.61 689.48 1270.95 689.47 1283.00
  Q 689.35 1444.37 689.35 1605.75
  C 689.35 1650.22 658.18 1686.09 614.46 1692.32
  Q 608.11 1693.23 594.50 1693.25
  Q 520.88 1693.38 447.25 1693.28
  Q 435.69 1693.26 425.58 1687.82
  C 405.66 1677.10 396.08 1657.06 399.72 1634.64
  Q 401.02 1626.59 405.13 1619.46
  C 413.81 1604.36 429.16 1594.65 447.00 1594.64
  Q 497.38 1594.61 547.75 1594.63
  Q 553.77 1594.63 560.41 1592.33
  C 567.36 1589.91 575.29 1582.18 576.43 1574.24
  Q 577.41 1567.41 577.42 1560.50
  Q 577.61 1391.12 577.62 1221.75
  C 577.62 1206.78 581.45 1190.81 590.96 1177.26
  C 602.60 1160.67 620.65 1148.38 639.40 1138.81
  Q 679.48 1118.36 719.52 1097.80
  C 721.32 1096.87 724.20 1096.65 723.80 1093.77
  Q 723.73 1093.25 723.20 1093.28
  Z'
    />
  </svg>
)

const Flask = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={`h-[1.4em] ${className}`}
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 256 256'
    height='200px'
    width='200px'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M225.15,197.71,164,95.81V44h4a12,12,0,0,0,0-24H88a12,12,0,0,0,0,24h4V95.81L30.85,197.71A20,20,0,0,0,48,228H208a20,20,0,0,0,17.15-30.29ZM140,44V99.14a12,12,0,0,0,1.71,6.17l35.13,58.54c-10.79.86-25.15-1.31-43.42-10.56-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22A12,12,0,0,0,116,99.14V44ZM55.06,204,79,164.19c13-1.11,27.62,2.42,43.62,10.52,19.61,9.92,36.25,13.31,49.85,13.31A75.44,75.44,0,0,0,190.11,186l10.83,18Z'></path>
  </svg>
)

const Book = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={`h-[1.4em] ${className}`}
    stroke='currentColor'
    fill='currentColor'
    strokeWidth='0'
    viewBox='0 0 24 24'
    height='200px'
    width='200px'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z'></path>
  </svg>
)

const links: Array<{ id: string; label: string; icon?: JSX.Element }> = [
  { id: 'header', label: 'Home', icon: <Kino /> },
  { id: 'tests', label: 'Tests', icon: <Flask /> },
  { id: 'about', label: 'About', icon: <Book /> }
]

export default function NavBar(): JSX.Element {
  return (
    <nav className={`flex justify-center items-center sticky top-0 w-full z-50 ${styles.navbar}`}>
      <ul className='flex gap-4'>
        {links.map(element => (
          <li key={element.id}>
            <Button
              color='primary'
              variant='ghost'
              size='lg'
              radius='full'
              className='backdrop-blur-lg'
              endContent={element.icon}
              onClick={() => {
                const $element = document.getElementById(element.id)
                $element?.scrollIntoView({ behavior: 'smooth' })
              }}>
              <span className='hidden md:inline'>{element.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}