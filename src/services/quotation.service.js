import { graphQlFetch } from '@src/utils/request'
console.log('graphQlFetch', graphQlFetch)

// 查询首页信息
export function getSummaryData (symbol) {
  const body = `
   {
      summary (symbol: "${symbol}") {
        symbol
        name
        open
        high
        low
        current
        pre_close
        volume
        balance
        change
        change_rate
        market_value
        amplitude
        PE
        EPS
        total_shares
        status
        time
        bid
        ask
      }
    }
  `
  return graphQlFetch(body)
}
