

`#include <bits/stdc++.h>
using namespace std; 
const int inf=0x3f3f3f3f;
const long long INF=0x3f3f3f3f3f3f3f3f;
const int maxn=(1<<20)+50;
const int mod=998244353;
const int Mod=1e9+7;
typedef long long ll;
ll g[30],f[maxn],p[30];
ll lowbit(ll x) {
	return x & (-x);
}
int main()
{
//	std::ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);
	ll n,m;
	cin >> n >> m;
	for (int i=1; i<=m; i++)
	{
		ll x,y;
		cin >> x >> y;
		g[x] |= 1 << (y-1);
		g[y] |= 1 << (x-1);
	}
	for (int i=1; i<=n; i++) 
	{
		f[1<<(i-1)]=1 << (i-1);
	}
	for (int s=0; s<(1<<n); s++)
	{
		if (__builtin_popcount(s)<2) continue;
		for (int i=1; i<=n; i++)
		{
			if (s>>i-1 & 1)
			{
				if ((1<< i-1)==lowbit(s)) continue;
				if (f[s^(1<<i-1)] & g[i]) f[s]|=(1<<i-1);
			}
		}
	}
	cout <<" adsd\n";
	for (int s=0; s<(1<<n); s++)
	{
		bool flag=1;
		ll x=__lg(lowbit(s))+1;
		if (!(f[s] & g[x])) continue;
		for (int i=1; i<=n; i++){
			if (s>>i-1 & 1) continue;
			if (!(g[i] & s)) { flag=0; break; }
		}
		if (!flag) continue;
		for (int i=1; i<=n; i++) if (!(s>>i-1 & 1)) p[i]=__lg(lowbit(s & g[i]))+1;
		int t=s;
		while (t) {
			cout << t << "\n";
			for (int i=1; i<=n; i++) 
				if ((f[t] >> i-1 & 1) && (g[x]>>i-1 & 1)){
					p[x]=i; t^=(1<<i-1); x=i;
					break;
				}
		}
		break;
	}
	if (!p[1]) cout << "No\n";
	else
	{	
		cout << "Yes\n";
		for (int i=1; i<=n; i++) cout << p[i] << " ";
	}
}`