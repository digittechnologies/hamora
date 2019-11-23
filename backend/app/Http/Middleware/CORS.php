<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header('Access-control-Allow-Origin:*');
        header('Access-control-Allow-Headers: Content-type, X-Auth-Token, Authorization, Origin');

        return $next($request);
    }
}
