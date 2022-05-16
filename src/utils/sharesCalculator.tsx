/* User Inputs in Dato
- Purchase price - set by user (open market value)
- Initial share % - set by user (default 50%, user can also add other share prices which will be used in a slider to calculate costs)
- deposit for share %: (default 5% or 0.05)
- Service/estate charge: number (default 25 i.e. £25)
- Mortgage term (years): number (default 25)
- Mortgage rate %: (default 3.99% or 0.03999)
- Lease management fee
*/

import { CalculationValues } from "types/property"

/* Results after calculation client side
- Initial Share = purchase price * initial share user input %
- Deposit = Initial share * deposit for share
- Mortgage amount = Initial share - Deposit
- Monthly rent on the unsold share (2.75%) = purchase price user input * ( 1 - initial share user input ) * 2.75% / 12 
- Estimated monthly mortgage repayments = -pmt(mortgage rate / 12, mortgage term * 12, mortgage amount) (find out the calculations between the PMT function).
- Lease management fee = lease management fee user input (in case this ever needs to change)
- Estate/Service charge = Service/Estate charge user input
- Estimated monthly cost = monthly rent on unsold share + estimated monthly mortgage repayments + lease management fee + estate/service charge
- Minimum income = (monthly rent on unsold share + estimated monthly mortgage repayments + estate/service charge) * 12 / 45% / 0.74
*/

/* How to calculate estimated monthly mortgage repayments

This is based on an excel function called PMT: PMT(R, n, Pv)
    R: periodic interest rate which is APR/number of interest periods per year
    n: total number of interest periods i.e interest periods per year * number of years
    Pv: present value, starting value of loan

    R = mortgage rate / 12
    n = mortgage term * 12
    Pv = mortgage amount

    result = ( ( mortgage amount * ( mortgage rate / 12 ) ) / ( 1 - ( ( 1 + (mortgage rate / 12 ))^( - 1 * mortgage term * 12  ) ) ) )
    result = (        Pv         *             R        )   / ( 1 - (   1 +            R         )^(             -n            )

*/

export default function calculateShares(data: CalculationValues) {
  // Initial Share = purchase price * initial share user input %
  // convert share % to decimal
  const initialSharePercentageAsDecimal = convertPercentageValueToDecimal(
    data.initial_share_percentage
  )
  const initial_share = data.purchase_price * initialSharePercentageAsDecimal

  // Deposit = Initial share * deposit for share
  // convert deposit share i.e. 5 (5%) to a decimal (0.05)
  const shareDeposit = convertPercentageValueToDecimal(data.share_deposit)

  // calculate deposit cost
  const deposit = initial_share * shareDeposit

  // Mortgage amount = Initial share - Deposit
  const mortgage_amount = initial_share - deposit

  // Monthly rent on the unsold share (2.75%) = purchase price user input * ( 1 - initial share % user input ) * 2.75% / 12
  const monthly_rent_unsold_share = calculateMonthlyUnsoldShare(
    data.purchase_price,
    initialSharePercentageAsDecimal
  )

  // Estimated monthly mortgage repayments
  const mortgageRateAsDecimal = convertPercentageValueToDecimal(
    data.mortgage_rate
  )
  const estimated_monthly_mortgage_repayments = PMT(
    mortgageRateAsDecimal,
    data.mortgage_term,
    mortgage_amount
  )

  // Estate/Service charge = Service/Estate charge user input
  const service_charge = data.service_charge

  // Estimated monthly cost = monthly rent on unsold share + estimated monthly mortgage repayments + lease management fee + estate/service charge
  const estimated_monthly_cost = calculateEstimatedMonthlyCost(
    monthly_rent_unsold_share,
    estimated_monthly_mortgage_repayments,
    data.lease_management_fee,
    data.service_charge
  )

  // Minimum income = (monthly rent on unsold share + estimated monthly mortgage repayments + estate/service charge) * 12 / 45% / 0.74
  const minimum_income = calculateMinimumIncome(
    monthly_rent_unsold_share,
    estimated_monthly_mortgage_repayments,
    data.service_charge
  )
  const leaseManagementFee = parseFloat(
    String(data.lease_management_fee)
  ).toFixed(2)

  const results = {
    purchase_price: data.purchase_price,
    initial_share,
    deposit,
    mortgage_amount,
    monthly_rent_unsold_share,
    estimated_monthly_mortgage_repayments, // uses PMT function
    lease_management_fee: leaseManagementFee, // this comes from CMS, user can update it
    service_charge, // this comes from CMS in the field estate_service_charge
    estimated_monthly_cost,
    minimum_income,
  }

  return results
}

// used to get the estimated monthly mortgage repayments
export const PMT = (
  mortgage_rate: number,
  mortgage_term: number,
  mortgage_amount: number
) => {
  // R: periodic interest rate which is APR/number of interest periods per year
  // n: total number of interest periods i.e interest periods per year * number of years
  // Pv: present value, starting value of loan

  // To calculate R = mortgage rate / 12
  // To calculate n = mortgage term * 12
  // To calculate Pv = mortgage amount

  const R = mortgage_rate / 12
  const n = mortgage_term * 12
  const Pv = mortgage_amount

  // result = ((mortgage amount * (mortgage rate/12))/(1 - ((1 + (mortgage rate/12))^(-1 * mortgage term * 12))))
  // result = (        Pv       *             R     )/(1 - ( 1 +            R      )^(             -n          ))
  const result = ((Pv * R) / (1 - (1 + R) ** -n)).toFixed(2)

  // (startAmount * mRate / (1 - (1 + mRate) ** -term)).toFixed(2)
  // console.log("PMT", result)

  return Math.round(Number(result))
}

export const convertPercentageValueToDecimal = (percentageValue: number) => {
  const decimal = percentageValue / 100
  return Number(decimal.toFixed(4))
}

/**
 *
 * @param purchasePrice - a number based on the price of the property (normally a large number i.e. 173000)
 * @param initialSharePercentage - the initial share percentage number as a decimal
 * @returns
 */
export const calculateMonthlyUnsoldShare = (
  purchasePrice: number,
  initialSharePercentage: number
) =>
  Number(
    ((purchasePrice * (1 - initialSharePercentage) * 0.0275) / 12).toFixed(2)
  )

export const calculateEstimatedMonthlyCost = (
  monthly_rent_unsold_share: number,
  estimated_monthly_mortgage_repayments: number,
  lease_management_fee: number,
  service_charge: number
) => {
  return Number(
    (
      monthly_rent_unsold_share +
      estimated_monthly_mortgage_repayments +
      lease_management_fee +
      service_charge
    ).toFixed()
  )
}

export const calculateMinimumIncome = (
  monthly_rent_unsold_share: number,
  estimated_monthly_mortgage_repayments: number,
  service_charge: number
) => {
  return Number(
    (
      ((monthly_rent_unsold_share +
        estimated_monthly_mortgage_repayments +
        service_charge) *
        12) /
      0.45 /
      0.74
    ).toFixed()
  )
}
